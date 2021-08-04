import { Router } from "express"
import userRoutes from "./user.js"
import playlistRoutes from "./playlist.js"
import linkRoutes from "./link.js"
// import commentRoutes from "./comment.js"
const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/", userRoutes)
router.use("/", playlistRoutes)
router.use("/", linkRoutes)
router.use("/", commentRoutes)

export default router;
