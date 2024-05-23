import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = mongoose.Schema(
  {
    videoFile: {
      type: String, // cloudnary url
      require: true,
    },
    thumnail: {
      type: String, // cloudnary url
      require: true,
    },
    title: {
      type: String, // cloudnary url
      require: true,
    },
    description: {
      type: String, // cloudnary url
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
