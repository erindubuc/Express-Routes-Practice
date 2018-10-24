const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const swArray = ['Storm Trooper', 'Darth Vader', 'Yoda', 'Luke', 'R2D2'];

// ROUTERS
const partOne = require('./routes/partOne');
const todo = require('./routes/todo');
app.use('/routes/partOne', partOne);
app.use('/routes/todo', todo); 


// BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }));
//JSON
app.use(bodyParser.json());

//GET request that displays my name
app.get ('/', (req, res) => {
    res.send('<h1>Erin</h1');
    // status 200 OK
    res.status(200);
});

// GET route that says something using the param sent to it
app.get('/pumpkin', (req, res) => {
    res.send('<h1>Pumpkin Spice and Everything Nice</h1>');
    // status 200 OK
    res.status(200);
});
// GET query route ?= that accepts 2 nums 
// should send back mathematical equation and the result 
app.get('/divide', (req, res) => {
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
app.post('/login/:name/:pass', (req, res) => {
    const username = req.params.name;
    const password = req.params.pass;
    
    // check to see if the username and password send match. 
    if (username !== "Chewbacca" && password !== "Wookie1979") {
        // Status 403 Forbidden
        res.status(403).json('invalid credentials');
        } else {
            res.status(200).json('logged in');  
            }
    });

// POST request that has an item attribute. 
app.post('/data/:item', (req, res) => {
    const item = req.params.item;
    const isItThere = swArray.indexOf(item);
    // console.log(swArray);
    
   if(isItThere == -1) {
        // Add the item to the array.
        swArray.push(item);
        console.log(swArray);
        // Status 200 Ok
        res.status(200).json({message: `${item} has been added to this array!`});
        }
         else { 
             // 409 = CONFLICT status code
             res.status(409).json({message: `The item ${item} already exists in this array.`});
            } 
    });
   
//DELETE request that has an item attribute. 
app.delete('/data/:item', (req, res) => {
    const item = req.params.item;
    const isItThere = swArray.indexOf(item);
    
    if (isItThere != -1) {
            swArray.splice(isItThere, 1);
            // Status 200 Success with deletion
            res.status(200).json(swArray);
            console.log(swArray);
            } else {
            // Status = error
             res.status(404).json(`${item} was not found in this array.`);
            } 
    });


app.listen(port, () => console.log(`Listening on port ${port}`));


