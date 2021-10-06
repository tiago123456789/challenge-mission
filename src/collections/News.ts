import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: String,
    description: String
})

export default mongoose.model("new", newsSchema)