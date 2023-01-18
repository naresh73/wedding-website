const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    id : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const userModel = Mongoose.model("userModel", userSchema);

module.exports = userModel;