import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    duration: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    facilitator: {
      type: String,
    },
    time: {
      type: String,
    },
    mode: {
      type: String,
    },
    location: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Event || mongoose.model("Event", eventSchema);
