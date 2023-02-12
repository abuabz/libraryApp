const express=require('express')
const LoginRouter = express.Router()
LoginRouter.use(express.static('./public'))
const logdata = require('../models/login_page')

LoginRouter.get('/',(req,res)=>{
    res.render('login')
})
LoginRouter.get('/loged',(req,res)=>{
    // console.log(req.query)

    var details = {
        username:req.query.username,
        password:req.query.password
    }
    console.log(details)
    logdata(details).save().then((login)=>{
        res.redirect('/login')
     })
})


module.exports=LoginRouter