import { Router } from "express"
import { signUp, signIn, verify, updateUser, deleteUser } from "../controllers/users.js"

const router = Router()

// to sign up
router.post("/sign-up", signUp)

// to sign in
router.post("sign-in", signIn)

// verify a user
router.get("/verify", verify)

// change user password
router.post("/change-password")

// edit user
router.put("/user/:id", updateUser)

// delete user
router.get("/user/:id", deleteUser)

export default router;