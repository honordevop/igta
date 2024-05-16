import mongoose from "mongoose";

const { Schema } = mongoose;

const depositSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    facilitator: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
    mode: {
      type: String,
      required: true,
    },
    partner: {
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
export default mongoose.models.Deposit ||
  mongoose.model("Deposit", depositSchema);
