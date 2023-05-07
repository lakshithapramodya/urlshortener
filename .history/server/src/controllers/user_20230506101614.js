import user from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
      password: req.body.password,
    });
  } catch (err) {
    res.json({ status: "error", error: err });
  }

  if (validUser) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123456"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
}
