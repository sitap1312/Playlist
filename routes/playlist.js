import { Router } from "express";
import { getAllPlaylists,getPlaylist,updatePlaylist,createPlaylist,deletePlaylist} from "../controllers/playlists.js"
// import restrict from "../helpers/restrict.js";


const router = Router()

// get all playlist
router.get("/playlist", getAllPlaylists)

// get playlist by id
router.get("/playlist/:id", getPlaylist)

// update/edit a playlist
router.put("/playlist/:id", updatePlaylist)

// create a playlist
router.post("/playlist", createPlaylist)

// delete a playlist
router.delete("/playlist/:id", deletePlaylist)


export default router;