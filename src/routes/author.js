const express=require('express')
const AuthorRouter = express.Router()
AuthorRouter.use(express.static('./public'))
const authdata = require('../models/add_book')



AuthorRouter.get('/',(req,res)=>{
    authdata.find().then((adata)=>{
        console.log(adata);
        res.render('author',{adata})
    })
  
    
})



module.exports=AuthorRouter