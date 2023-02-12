const express=require('express')
const BookRouter = express.Router()
BookRouter.use(express.static('./public'))
const bookdata = require('../models/add_book')


BookRouter.get('/',(req,res)=>{
    bookdata.find().then((data)=>{
        console.log(data);
        res.render('books',{data})
    })
  
})



module.exports=BookRouter