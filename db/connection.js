import mongoose from "mongoose";

const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/playlistifyDatabase";

mongoose.set("debug", true);

mongoose.set("useCreateIndex", true);

mongoose.set("returnOriginal", true);

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((error) =>
    console.error("Error connecting to MongoDB: ", error.message)
  );

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB")
);

mongoose.connection.on("error", (error) =>
  console.error(`MongoDB connection error: ${error.message}`)
);

export default mongoose.connection;