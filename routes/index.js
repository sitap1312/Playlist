import { Router } from "express";
import userRoutes from "./user.js";
import playlistRoutes from "./playlist.js";
import linkRoutes from "./link.js";
import commentRoutes from "./comment.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

//Route for Users
router.use("/", userRoutes);

//Route for Playlists
router.use("/", playlistRoutes);

//Route for Links
router.use("/", linkRoutes);

// Route for Comments
router.use("/", commentRoutes);


export default router;
