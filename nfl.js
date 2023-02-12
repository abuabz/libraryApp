var http = require('http')

http.createServer(function(req,res){
    console.log(req.url);

    if(req.url==='/')
    {
        res.write("hi")
        res.end()
    }
    else if(req.url==='/login')
    {
     res.write('login')
     res.end()   
    }
    else
    {
        res.write("Page not found")
        res.end()
    }


}).listen(3010,()=>console.log("server is running http://localhost:3010"))