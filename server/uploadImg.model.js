const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    type : String,
    imageUrl : String
});

const postModel = mongoose.model("postModel", postSchema)

module.exports = postModel