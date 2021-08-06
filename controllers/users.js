import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

import User from "../models/user.js"

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "123456789"

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 14);


// User SignUp
export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)

    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save()
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000)
    }
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
};

//User SignIn
export const signIn = async (req, res) => {
  try {
    
    const { email, password } = req.body
    const user = await User.findOne({ email }).select(
      "email username password_digest"
    );

    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000)
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).json({ error: "Invalid Credentials" })
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
};

//Verify user info
export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.json(payload)
    }
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ error: "Not Authorized" })
  }
}

// getUser
export const getUser = async (req,res) => {
  try {
      const user = await User.findById(req.user).populate("playlist")
      if(user) {
          return res.status(200).json(user)
      } else {
          return res.status(404).send("User Not Found")
      }
  } catch(err) {
      return res.status(500).json({error: err.message})
  }
}

// updating the user info
export const updateUser = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { body } = req;
    const updatedUser = await User.findByIdAndUpdate(user_id, body, { new: true })
    res.send(updatedUser)
  } catch (e) {
    res.status(422).json({ error: e.message });
  }
};

  //User Delete
  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json({ message: `Deleted ${deletedUser.username}` });
    } catch (err) {
      res.status(500).json({ error: "Error deleting task" });
    }
  };

