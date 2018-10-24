// to-do router
const express = require('express');
const todoRouter = express.Router();

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


module.exports = todoRouter;