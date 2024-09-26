import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema(
    {
        title: {
          type: String,
        },
        content: {
          type: String,
        },
        course: {
          type: String,
        },
        image: {
          type: String,
        },
        show: {
          type: Boolean,
          default: true
        },
      },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Note || mongoose.model("Note", noteSchema);
