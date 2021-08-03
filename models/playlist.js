import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: { type: String, require: true },
  imgURL: { type: String, require: false },
  description: { type: String, require: true },
  category: { type: Array, require: true },
  link: [{ type: Schema.Types.ObjectId, ref: "Link" }],
  user: [ {type: Schema.Types.ObjectId, ref: "User"}],

},
{timestamps: false}
)

module.exports = mongoose.model('Playlist', playlistSchema)