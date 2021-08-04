import { Router } from "express";
// <<<<<<< userDivine
// import { getAllPlaylists,getPlaylist,updatePlaylist,createPlaylist,deletePlaylist} from "../controllers/playlists.js"
// import restrict from "../helpers/restrict.js";
// =======
import { getAllPlaylists, getPlaylist, updatePlaylist, createPlaylist, deletePlaylist } from "../controllers/playlists.js";
import restrict from '../helpers/restrict.js';
>>>>>>> userSita


const router = Router();

// get all playlist
router.get("/playlist", getAllPlaylists);

// get playlist by id
router.get("/playlist/:id", getPlaylist);

update/edit a playlist
// <<<<<<< userDivine
// router.put("/playlist/id",   updatePlaylist)


// // create a playlist
// router.post("/playlist",  createPlaylist)

// // delete a playlist
// router.delete("/playlist/:id",  deletePlaylist)
// =======
router.put("/playlist/id", restrict, updatePlaylist);


// create a playlist
router.post("/playlist", restrict, createPlaylist);

// delete a playlist
router.delete("/playlist/:id", restrict, deletePlaylist);
>>>>>>> userSita


export default router;