import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  userId: [{type: Schema.Types.ObjectId, ref: "User"}]
},
{timestamps:false}
)

module.exports = mongoose.model("Comment" , commentSchema)