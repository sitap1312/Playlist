import db from "../db/connection.js";
import Comment from "../models/comment.js";
import Playlist from "../models/playlist.js";
import User from "../models/user.js";

db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).populate("userId");
    res.send(comments);
  } catch (err) {
    res.status(500).json({ error: "Error displaying all comments" });
  }
};

//Get single comment
export const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id).populate("userId");
    if (comment) {
      res.send(comment);
    }
  } catch (err) {
    res.status(404).json({ message: "Comment not found" });
  }
};

//Create a New comment
export const createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);

    const playlist = await Playlist.findById(newComment.playlistId);
    const user = await User.findById(req.user);

    console.log(newComment);
    console.log(playlist);
    console.log(user);
    newComment.userId = user._id;
    newComment.username = user.username;

    await newComment.save();
    playlist.comments.push(newComment._id);
    user.comments.push(newComment._id);
    await playlist.save();
    await user.save();
    res.status(201).json(newComment);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


//Update a comment
export const updateComment = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json({ error: "Error updating comment" });
  }
};

//Delete a comment
export const deleteComment = async (req, res) => {
  try {
    let { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    res.status(200).json({ deletedComment });
  } catch (err) {
    res.status(500).json({ error: "Error deleting comment" });
  }
};
