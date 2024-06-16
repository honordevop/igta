import mongoose from "mongoose";

const { Schema } = mongoose;

const trainingSchema = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
    },
    mode: {
      type: String,
      default: "Scheduled Virtual",
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Training ||
  mongoose.model("Training", trainingSchema);
