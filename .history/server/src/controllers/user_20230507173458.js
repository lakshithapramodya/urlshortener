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
    res.cookie("token", token, {
      maxAge: 360000,
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
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json({ status: "error", message: "No token found" });
  }
  try {
    const validUser = jwt.verify(token, secret);
    req.id = validUser.id;
    next();
  } catch (err) {
    res.clearCookie(token);
    return res.json({ status: "error", message: "Invalid token" });
  }
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

export async function logout(req, res, next) {
  const prevToken = req.cookies.token;
  console.log(`prevToken: ${prevToken}`);
  if (!prevToken) {
    return res.json({ status: "error", message: "Could not find token" });
  }
  try {
    const validUser = req.id;
    console.log(`user: ${validUser}`);
    res.clearCookie(`${validUser.id}`);
    req.cookie[`${validUser.id}`] = "";
    return res.json({ status: "ok", message: "Logout successfully" });
  } catch (err) {
    return res.json({ status: "error", message: "Authentication Error" });
  }
}
