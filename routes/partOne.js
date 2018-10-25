// partOne router
const express = require('express');
// initiate router
let router = express.Router();

// partOne = existing routes
const swArray = ['Storm Trooper', 'Darth Vader', 'Yoda', 'Luke', 'R2D2'];

//GET request that displays my name
router.get ('/', (req, res) => {
    res.send('<h1>Erin</h1');
    // status 200 OK
    res.status(200);
});
// GET route that says something using the param sent to it--what is your fave thing about fall?
router.get('/say/:fallFave', (req, res) => {
    const fallFave = req.params.fallFave;
    res.send(`Pumpkin Spice and Everything Nice! </br> ${fallFave} is my favorite thing about fall!`);
    // status 200 OK
    res.status(200);
});
// GET query route ?= that EITHER accepts 2 nums and sends back mathematical equation and the result
// OR accepts a word to spell out
router.get('/divide', (req, res) => {
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    const result = Math.floor(num1 / num2);
    
    // IF user provides no query parameters--> throw error 
    if(!num1 || !num2) {
        // status 400 = Invalid request
        res.status(400).send(`Please enter 2 numbers.`);
    } else {
        res.status(200).send(`<h1>${num1} / ${num2} = ${result} (this number may be rounded)</h1>`);
        // status 200 OK
        // res.status(200);
    }
});

// POST route that accepts a username and password
router.post('/login/:name/:pass', (req, res) => {
    const username = req.params.name;
    const password = req.params.pass;
    
    // check to see if the username and password match. 
    if (username !== "Chewbacca" || password !== "Wookie1979") {
        // if username OR password don't match!
        // Status 403 Forbidden
        res.status(403).json('invalid credentials');
    } else {
        res.status(200).json('logged in');  
    }
});

// POST request that has an item attribute. 
router.post('/data', (req, res) => {
    const item = req.body.name;
    const isItThere = swArray.indexOf(item);
    // console.log(swArray);
    if(isItThere === -1) {
        // Add the item to the array.
        swArray.push(item);
        console.log(swArray);
        // Status 200 Ok
        res.status(200).json({message: `${item} has been added to this array!`});
    } else { 
        // 409 = CONFLICT status code
        res.status(409).json({message: `The item ${item} already exists in this array.`});
    } 
});

//DELETE request that has an item attribute. 
router.delete('/data', (req, res) => {
    const item = req.params.name;
    const isItThere = swArray.indexOf(item);
    
    if (isItThere != -1) {
        // IF item IS there
        swArray.splice(isItThere, 1);
        // Status 200 Success with deletion
        res.status(200).json(swArray);
        console.log(swArray);
    } else {
        // Status = error
        res.status(404).json(`${item} was not found in this array.`);
    } 
});

// export router module to server
module.exports = router;

