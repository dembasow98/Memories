import mongoose from "mongoose";



//create the schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//Turn the schema into a model
const Post = mongoose.model("Post", postSchema);

//exporting model
export default Post;