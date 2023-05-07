import user from "../models/user.js";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  try {
    const newUser = await user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ status: "error" });
  }
}

export async function getUser(req, res) {
  const validUser = await user.findOne({
    email: req.body.email,
    password: req.body.password,
  });

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
