const Express = require('express');
const App = Express();
const Port = 8001;
const CORS = require('cors');
const connectToDB = require('./db');
const controller = require('./controller');

connectToDB;
App.use(Express.json(), CORS());
App.listen(Port, console.log("Server is listening on PORT - ",Port));

// App.post("/add", controller.createId)
App.post("/login", controller.login);