import db from '../db/connection.js';
import Playlist from "../models/playlist.js";
import User from "../models/user.js"

db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Get All Playlists
export const getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({});
    res.json(playlists);
  } catch (e) {
    res.status(500).json({ error: "Error Displaying all Playlist" });
  }
};

//Get Single Playlist
export const getPlaylist = async (req, res) => {
  try {
    let { id } = req.params;
    const playlist = await Playlist.findById(id).populate("links").populate("userId").populate("comments").populate("userId");
    if (playlist) {
      res.json(playlist);
    }
  } catch (e) {
    res.status(500).json({ error: "Error displaying Playlist" });
  }
};

//Create New Playlist
export const createPlaylist = async (req, res) => {
  try {

    const playlist = new Playlist(req.body);
    const user = await User.findById(req.user);
    playlist.userId = user._id;
    await playlist.save();
    user.playlist.push(playlist);
    await user.save();
    res.status(201).json(playlist);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

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

