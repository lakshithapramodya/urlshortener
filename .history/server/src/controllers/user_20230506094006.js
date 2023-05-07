import user from "../models/user.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  const { username, email, password } = req.body;

  try {
    const existingUser = await user.findOne({
      email: email,
    });
    console.log(existingUser);
    //   else {
    //     const newUser = await user.create({
    //       username: req.body.username,
    //       email: req.body.email,
    //       password: req.body.password,
    //     });
    //     res.json({ status: "ok", message: newUser });
    //   }
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: err });
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
