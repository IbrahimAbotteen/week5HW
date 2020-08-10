const express=require('express');
const todoRouter=express.Router();

const todoController=require("../controller/todoController");

todoRouter.post('/',todoController.create);
todoRouter.get('/',todoController.index);






module.exports=todoRouter; 