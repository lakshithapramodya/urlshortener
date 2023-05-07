import user from "../models/user.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  let existingUser;
  try {
    existingUser = await user.findOne({
      email: req.body.email,
    });
    if (existingUser !== "") {
      res.json({ status: "error", message: "user already exists" });
    }
  } catch (err) {
    console.error(err);
    res.json({ status: "error", error: err });
  }

  //   else {
  //     const newUser = await user.create({
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: req.body.password,
  //     });
  //     res.json({ status: "ok", message: newUser });
  //   }
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
