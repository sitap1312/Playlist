import mongoose from "mongoose";
const Schema = mongoose.Schema

const linkSchema = new Schema({
  title: { type: String, require: true },
  artist: { type: String, require: true },
  linkURL: { type: String, require: true },
  playlist: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
  user: [ {type: Schema.Types.ObjectId, ref: "User"}],


},
{timestamps:true}
)
module.exports = mongoose.model("Link", linkSchema)