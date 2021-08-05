import db from '../db/connection.js';
import Playlist from "../models/playlist.js";
import User from "../models/user.js"

db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Get All Playlists
export const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({});
    res.send(playlists);
  } catch (e) {
    res.status(500).json({ error: "Error Displaying all Playlist" });
  }
};

//Get Single Playlist
export const getPlaylist = async (req, res) => {
  try {
    let { id } = req.params;
    const playlist = await Playlist.findById(id);
    if (playlist) {
      res.send(playlists);
    }
  } catch (e) {
    res.status(500).json({ error: "Error displying Playlist" });
  }
};

//Create New Playlist
export const createPlaylist = async (req,res) => {
  try {
      let {title, description, imgURL, category, userId} = req.body
      let newPost = {
          title, 
          description,
          imgURL,
          category,
          userId,
      }
      const post = await Playlist.create(newPost)
      await User.findByIdAndUpdate({_id: post.user_id}, {$push: {links: playlist._id}})
      return res.status(200).json(post)
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

//Update Playlist
export const updatePlaylist = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedPlaylist = await Playlist.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedPlaylist);
  } catch (e) {
    res.status(500).json({ error: "Error Updating Playlist" });
  }
};

//Delete Playlist
export const deletePlaylist = async (req, res) => {
  try {
    let { id } = req.params;
    const deletedPlaylist = await Playlist.findByIdAndDelete(id);
    res.status(200).json({message: `Deleted ${deletedPlaylist.title}`});
  } catch (e) {
    res.status(500).json({ error: "Error Deleting Playlist" });
  }
};

