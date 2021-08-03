import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

import User from "../models/user.js"

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "123456789"

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 14);

export const SignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password = await bcrypt.hash(password, SALT_ROUNDS)

    const user = new User({
      username,
      email,
      password
    });

    await user.save()
    const payload = {
      id: user_id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000)
    }
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({token})
  } catch (e) {
    res.status(400).json({error: e.message})
  }
}
export const signIn = async (req, res) => {


  try {
    
    const { email, password } = req.body
    const user = await User.findOne({ email }).select(
      "email username password"
    );

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTiime() / 1000)
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).json({error: "Invalid Credentials"})
      }
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}
export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (e) {
    console.log(e.message);
    res.status(401).json({error: "Not Authorized"})
  }
}

