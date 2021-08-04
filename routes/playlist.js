import { Router } from "express";
// <<<<<<< userStephen
// import { getAllPlaylists,getPlaylist,updatePlaylist,createPlaylist,deletePlaylist} from "../controllers/playlists.js"
// // import restrict from "../helpers/restrict.js";
// =======
// // <<<<<<< userDivine
// // import { getAllPlaylists,getPlaylist,updatePlaylist,createPlaylist,deletePlaylist} from "../controllers/playlists.js"
// // import restrict from "../helpers/restrict.js";
// // =======
// import { getAllPlaylists, getPlaylist, updatePlaylist, createPlaylist, deletePlaylist } from "../controllers/playlists.js";
// import restrict from '../helpers/restrict.js';
// >>>>>>> userSita
// >>>>>>> userSita


const router = Router();

// get all playlist
router.get("/playlist", getAllPlaylists);

// get playlist by id
router.get("/playlist/:id", getPlaylist);

// <<<<<<< userStephen
// // update/edit a playlist
// router.put("/playlist/:id", updatePlaylist)

// // create a playlist
// router.post("/playlist", createPlaylist)

// // delete a playlist
// router.delete("/playlist/:id", deletePlaylist)
// =======
// update/edit a playlist
// // <<<<<<< userDivine
// // router.put("/playlist/id",   updatePlaylist)


// // // create a playlist
// // router.post("/playlist",  createPlaylist)

// // // delete a playlist
// // router.delete("/playlist/:id",  deletePlaylist)
// // =======
// router.put("/playlist/id", restrict, updatePlaylist);


// // create a playlist
// router.post("/playlist", restrict, createPlaylist);

// // delete a playlist
// router.delete("/playlist/:id", restrict, deletePlaylist);
// >>>>>>> userSita
// >>>>>>> userSita


export default router;