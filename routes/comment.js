import { Router } from "express";
import { getAllComments, getComment, updateComment, createComment, deleteComment } from "../controllers/comments";
import restrict from "../helpers/restrict";

const router = Router()

//get all comments
router.get("/comment", getAllComments)

//get comment by id 
router.get("/comment", getComment)

//update/edit a comment 
router.put("/comment/:id", restrict, updateComment)

//create a comment 
router.post("/comment", restrict, createComment)

//delete a comment 
router.delete("/comment/:id", restrict, deleteComment)

export default router;