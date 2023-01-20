const Mongoose = require('mongoose');
const DBurl = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = Mongoose.connect(DBurl, ((err) => {
    if(!err) {
        console.log("Connect to mongoDB database");
    }
    else {
        console.log(err);
    }
}))

module.exports = connectToDB;
