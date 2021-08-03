import mongoose from "mongoose";
const Schema = mongoose.Schema

const linkSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  linkURL: { type: String, required: true },
  playlist: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
  // user: [ {type: Schema.Types.ObjectId, ref: "User"}],


},
{timestamps:true}
)
module.exports = mongoose.model("Link", linkSchema)