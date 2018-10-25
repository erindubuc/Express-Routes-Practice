// to-do router
const express = require('express');
// initiate router
let router = express.Router();

// array of todos
const todos = [
    {
        id: 1,
        title: "mom",
        author: "Erin",
        task: "make dinner"
        }, 
    {
        id: 2,
        title: "dad",
        author: "Brian",
        task: "mow lawn"
        },
    {
        id: 3,
        title: "son",
        author: "Owen",
        task: "clean room"
        },
    {
        id: 4,
        title: "son",
        author: "Leim",
        task: "sweep floor"
        },
    {
        id: 5,
        title: "daughter",
        author: "Ellie",
        task: "match socks"
        },
    ];

router.route('/todo', (req, res, next) => {
    res.status(200).json('Yahooooo!');
    next();
});
router.get('/todo', (req, res) => {
    // const index = todos.findIndex(element => {
    //     return element.task
    //     }
    res.send(`${todos}`);
    }); 

// GET request to return all todos 
// router.get('/to do', (req, res) => {
//         res.status(200).json({message: "WOW, it's really working!"});
//         }
// );


module.exports = router;