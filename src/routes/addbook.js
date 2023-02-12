const express=require('express')
const AddbookRouter = express.Router()
AddbookRouter.use(express.static('./public'))
const bookdata = require('../models/add_book')

AddbookRouter.get('/',(req,res)=>{
    res.render('addbook')
    
})
AddbookRouter.get('/bookadded',(req,res)=>{
    // console.log(req.query)

    var details = {
        email:req.query.email,
        password:req.query.password,
        bname:req.query.bname,
        aname:req.query.aname
    }
    console.log(details)
    bookdata(details).save().then((bookuser)=>{
        res.redirect('/books')
     })
})


module.exports=AddbookRouter