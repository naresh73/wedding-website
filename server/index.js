const express = require('express');
const App = express();
const Port = 8001;
const cors = require('cors');
const connectToDB = require('./db');
const controller = require('./controller');
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({dest : 'uploads/'})

connectToDB;
App.use(cors())
App.use(bodyParser.urlencoded({extended: false}))
App.use(bodyParser.json())
App.use(express.json());
App.use('/uploads',express.static('uploads'))
App.listen(Port, console.log("Server is listening on PORT - ",Port));

// App.post("/add", controller.createId)
App.post("/login", controller.login);
App.get("/images", controller.getImgs);
App.post("/uploads", upload.single('image'), controller.uploadImg);