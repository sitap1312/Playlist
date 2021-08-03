import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: { type: String, required: true },
  imgURL: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: Array, required: true },
  link: [{ type: Schema.Types.ObjectId, ref: "Link" }],
  // user: [ {type: Schema.Types.ObjectId, ref: "User"}],

},
{timestamps: false}
)

module.exports = mongoose.model('Playlist', playlistSchema)