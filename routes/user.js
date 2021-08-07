import { Router } from "express";
import { signUp, signIn, verify, updateUser, deleteUser, getUser } from "../controllers/users.js";
import restrict from "../helpers/restrict.js"

const router = Router()

// to sign up
router.post("/sign-up", signUp);

// to sign in
router.post("/sign-in", signIn);

// verify a user
router.get("/verify", verify);

// get user
router.get("/get-user/:id",restrict, getUser)

// change user password
router.post("/change-password");

// edit user
router.put("/user/:id",restrict, updateUser);

// delete user
router.delete("/user/:id",restrict, deleteUser);

export default router;