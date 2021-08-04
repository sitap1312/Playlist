import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  title: { type: String, required: true },
  imgURL: { type: String, required: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  links: [{ type: Schema.Types.ObjectId, ref: "Link" }],
  userId: [ {type: Schema.Types.ObjectId, ref: "User"}],

},
{timestamps: false}
)

export default mongoose.model('Playlist', playlistSchema)