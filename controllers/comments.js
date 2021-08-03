// <<<<<<< userSita
// import db from '../db/connection.js';
// import Comment from "../models/comment.js";

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// //Get all comments
// export const getAllComments = async (req, res) => {
//   try {
//     const comments = await Comment.find({});
//     res.send(comments);
//   } catch (err) {
//     res.status(500).json({ error: "Error displaying all comments" });
//   }
// };

// //Get single comment
// export const getComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findById(id);
//     if (comment) {
//       res.send(comment);
//     }
//   } catch (err) {
//     res.status(404).json({ message: "Comment not found" });
//   }
// };

// //Create a New comment
// export const createComment = async (req, res) => {
//   try {
//     const newComment = new Comment(req.body);
//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (err) {
//     res.status(500).json({ error: "Unable to create a comment" });
//   }
// };

// //Update a comment
// export const updateComment = async (req, res) => {
//   try {
//     let { id } = req.params;
//     const updatedComment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(updatedComment);
//   } catch (err) {
//     res.status(500).json({ error: "Error updating comment" });
//   }
// };

// //Delete a comment
// export const deleteComment = async (req, res) => {
//   try {
//     let { id } = req.params;
//     const deletedComment = await Comment.findByIdAndDelete(id);
//     res.status(200).json({ deletedComment });
//   } catch (err) {
//     res.status(500).json({ error: "Error deleting comment" });
//   }
// };

// =======
// import Comment from "../models/comment.js"
// >>>>>>> userDivine
