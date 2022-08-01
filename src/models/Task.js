import { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
         type: String,
         trim: true,
         required: true,
          unique: true },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
