const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const partOne = require('./routes/partOne');
const todo = require('./routes/todo');

// BODY Parser----------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTERS need to run throuh app----------------------------------
// localhost:8080/partOne----------------------------
    app.use('/partOne', partOne);
// localhost:8080/to do -----------------------------
    app.use('/todo', todo);
 
// port that app is binded to
app.listen(port, () => console.log(`Listening on port ${port}`));
