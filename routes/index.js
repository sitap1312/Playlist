// <<<<<<< userDivine
// import { Router } from "express"
// import userRoutes from "./user.js"
// import playlistRoutes from "./playlist.js"
// import linkRoutes from "./link.js"
// // import commentRoutes from "./comment.js"
// =======
import { Router } from "express";
import userRoutes from "./user.js";
import playlistRoutes from "./playlist.js";
import linkRoutes from "./link.js";
// import commentRoutes from "./comment.js";

// >>>>>>> userSita
const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

// <<<<<<< userStephen
// router.use("/", userRoutes)
// router.use("/", playlistRoutes)
// router.use("/", linkRoutes)
// router.use("/", commentRoutes)
// =======
// <<<<<<< userDivine
// router.use("/", userRoutes)
// router.use("/", playlistRoutes)
// router.use("/", linkRoutes)
// // router.use("/", commentRoutes)
// =======
//Route for Users
router.use("/", userRoutes);

//Route for Playlists
router.use("/", playlistRoutes);

//Route for Links
router.use("/", linkRoutes);

//Route for Comments
// router.use("/", commentRoutes);
// >>>>>>> userSita
// >>>>>>> userSita

export default router;
