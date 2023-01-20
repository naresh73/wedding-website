const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageUrl : String
});

const postModel = mongoose.model("postModel", postSchema)

module.exports = postModel