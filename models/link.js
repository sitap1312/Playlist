import mongoose from "mongoose";
const Schema = mongoose.Schema

const linkSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  linkURL: { type: String, required: true },
  playlistId: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],


},
{timestamps:true}
)
module.exports = mongoose.model("Link", linkSchema)