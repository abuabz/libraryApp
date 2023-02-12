const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://abuabz:mongodbabu@cluster0.ucqs1tc.mongodb.net/LIBRARYDB?retryWrites=true&w=majority') //db connection

const Schema = mongoose.Schema

const RegSchema = new Schema({
    email:String,
    password:String,
    bname:String,
    aname:String
})
 var Bookdata = mongoose.model('bookdata',RegSchema) //model creation

 module.exports=Bookdata;