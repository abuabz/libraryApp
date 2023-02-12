const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abuabz:mongodbabu@cluster0.ucqs1tc.mongodb.net/LIBRARYDB?retryWrites=true&w=majority') //db connection

const Schema = mongoose.Schema

const RegSchema = new Schema({
    username:String,
    password:String
})
 var Logdata = mongoose.model('logdata',RegSchema) //model creation

 module.exports=Logdata;