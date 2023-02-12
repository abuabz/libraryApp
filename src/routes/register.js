const express =  require('express')
const RegisterRouter = express.Router()
RegisterRouter.use(express.static('./public'))
const regdata = require('../models/user_register')

                        
RegisterRouter.get('/',(req,res)=>{
    res.render('Register')
})
RegisterRouter.get('/Registered',(req,res)=>{
    console.log(req.query)

    var details = {
        email:req.query.email,
        password:req.query.password,
        cpass:req.query.cpass
    }
    console.log(details)
    regdata(details).save().then((reguser)=>{
        res.redirect('/')
     })
})

module.exports = RegisterRouter