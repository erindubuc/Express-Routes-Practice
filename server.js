/*global swArray*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

swArray = ['Storm Trooper', 'Darth Vader', 'Yoda', 'Luke', 'R2D2'];

// want express to use the body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// check to see if it is in a url encoded format - then parse it into json format
app.use(bodyParser.json());

//send a get request that displays my name
app.get ('/', (req, res) => res.send('<h1>Erin</h1'))

// create route that says something using the param sent to it
// app.get('/pumpkin', (req, res) => res.send('<h1>Pumpkin Spice and Everything Nice</h1>'));

// create query route ?= that accepts 2 nums 
// should send back mathematical equation and the result 
app.get('/divide', (req, res) => {
    const num1 = parseInt(req.query.num1, 10);
    const num2 = parseInt(req.query.num2, 10);
    const result = Math.floor(num1 / num2);
    res.send(`<h1>${num1} / ${num2} = ${result} (this number may be rounded)</h1>`);
    });

// Create a post route that accepts a username and password
// if they match send a json with a status of "logged in" or respond with a json that has a status of "invalid credentials"
// app.get('/login', (req, res) => {
    // res.send(`<h1>You can log in now</h1>`);
    // });
    
app.post('/login/:name/:pass', (req, res) => {
    const username = req.params.name;
    const password = req.params.pass;
    
    // check to see if the username and password send match. 
    if (username !== "Chewbacca" && password !== "Wookie1979") {
        res.json('invalid credentials');
        } else {
            res.status(200).json('logged in');  
            }
    });

// create a global variable array
// Create a post request that has an item attribute. 
app.post('/data/:item', (req, res) => {
    const item = req.params.item;
    const isItThere = swArray.indexOf(item);
    console.log(swArray);
    
   if(isItThere == -1) {
        // Add the item to the array.
        swArray.push(item);
        console.log(swArray);
        res.json({message: `${item} has been added to this array!`});
        }
         else { 
             // 409 = CONFLICT status code
             res.status(409).json({message: `The item ${item} already exists in this array.`});
            } 
    });
   
// create a delete request that has an item attribute. 
// remove the item from the array.indexOf() will find whether there is anything in the array.
app.delete('/data/:item', (req, res) => {
    const item = req.params.item;
    const isItThere = swArray.indexOf(item);
    
    if (isItThere != -1) {
            swArray.splice(isItThere, 1);
            res.json(swArray);
            console.log(swArray);
            } else {
            // the routes should respond back with an error if the item does not exist in the array 
             res.status(404).json(`${item} was not found in this array.`);
            } 
    });


app.listen(port, () => console.log(`Listening on port ${port}`))



// extra credit. Find out how to respond with the correct http status code for the two errors.
