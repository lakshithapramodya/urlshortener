import user from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const secret = "secret123456";

export async function signup(req, res) {
  let existingUser;
  try {
    existingUser = await user.findOne({
      email: req.body.email,
    });
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: err });
  }

  if (existingUser) {
    res.json({ status: "error", message: "user already exists" });
  } else {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = await user.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.json({ status: "ok", message: newUser });
  }
}

export async function login(req, res) {
  let validUser;
  try {
    validUser = await user.findOne({
      email: req.body.email,
    });
  } catch (err) {
    res.json({ status: "error", error: err });
  }

  if (validUser) {
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      validUser.password
    );
    if (!isPasswordCorrect) {
      return res.json({ status: "ok", message: "Password incorrect" });
    }
    const token = jwt.sign({ id: validUser._id }, secret, { expiresIn: "1hr" });

    res.cookie(String(validUser._id), token, {
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,
      sameSite: "lax",
    });

    return res.json({
      status: "ok",
      message: "Password correct",
      user: validUser,
      token: token,
    });
  } else {
    return res.json({ status: "error", message: "User not found" });
  }
}

export async function verifyToken(req, res, next) {
  const cookie = req.headers.cookie;
  const token = cookie?.split("=")[1];
  console.log(token);

  if (!token) {
    res.json({ status: "error", message: "No token found" });
  }
  jwt.verify(String(token), secret, (err, user) => {
    if (err) {
      res.json({ status: "error", message: "Invalid token" });
    }
    req.id = user.id;
  });
  next();
}

export async function getUser(req, res, next) {
  const userId = req.id;
  let userInfo;
  try {
    userInfo = await user.findById(userId, "-password");
  } catch (err) {
    console.error(err);
  }
  if (!userInfo) {
    return res.json({ status: "error", message: "User not found" });
  }
  return res.json({ userInfo });
}
