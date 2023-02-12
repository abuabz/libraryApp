
const express = require('express')
const app = express()

const BookRouter=require('./src/routes/books')

const AddbookRouter=require('./src/routes/addbook')

const AuthorRouter=require('./src/routes/author')

const RegisterRouter = require('./src/routes/register')

const LoginRouter = require('./src/routes/login')

app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')



app.use('/books',BookRouter)

app.use('/addbook',AddbookRouter)

app.use('/author',AuthorRouter)

app.use('/Register',RegisterRouter)

app.use('/login',LoginRouter)


app.get('/',(req,res)=>{

    res.render('index')
})




app.listen(3000,()=>{
        console.log("server started at port http://localhost:3000");
})
