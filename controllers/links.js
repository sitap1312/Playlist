import db from '../db/connection.js';
import Link from "../models/link.js";
import Playlist from "../models/playlist.js"

db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Get all links
export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({});
    res.send(links);
  } catch (err) {
    res.status(500).json({ error: "Error displaying all lists" });
  }
};

//Get single link
export const getLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);
    if (link) {
      res.send(link);
    }
  } catch (err) {
    res.status(404).json({ message: "Link not found" });
  }
};

// Create a New link
export const createLink = async (req, res) => {
    try {
    const newLink = new Link(req.body);
    const playlist = await Playlist.findById(newLink.playlistId)
    console.log(playlist)
    playlist.links = newLink._id
    await newLink.save();
    playlist.links.push(newLink._id)
    await playlist.save()
      res.status(201).json(newLink);
    } catch (err) {
      res.status(500).json({ error: "Unable to create a link" });
    }
  };


//Update a link
export const updateLink = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedLink = await Link.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedLink);
  } catch (err) {
    res.status(500).json({ error: "Error updating Link" });
  }
};

//Delete a link
export const deleteLink = async (req, res) => {
  try {
    let { id } = req.params;
    const deletedLink = await Link.findByIdAndDelete(id);
    res.status(200).json({ message: `Deleted ${deletedLink.title}` });
  } catch (err) {
    res.status(500).json({ error: "Error deleting link" });
  }
};

