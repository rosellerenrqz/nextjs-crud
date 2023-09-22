import mongoose, { Schema } from "mongoose"

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)

//if mongoose model is already existed then it will use first topic.
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)

export default Topic
