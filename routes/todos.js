var express = require('express');
var router = express.Router();



const {  findAllTodo, findTodo, addTodo } = require("../controllers/todos");


router.get('/', findAllTodo);
router.get('/:id', findTodo);
router.post('/', addTodo);
module.exports = router;
