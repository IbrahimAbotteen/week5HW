const app=require('../models/app')
const todoController={};

todoController.create = (req, res) => {
    new Todo({
      action: req.body.action,
      description: req.body.description,
      status: req.body.status,
      
    }).save().then((saved)=>{
        res.json({
            message:'ok',
            item:"saved"
        })
    })
}

todoController.index=function(req,res){
    Todo.getAll().then((items)=>{
        res.json({
            message:'ok',
            data:{items}
        })
    }).catch((err)=>{
        res.status(500).json({err})
    })
}

     



module.exports=todoController;