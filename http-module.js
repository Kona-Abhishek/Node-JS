const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    
    res.end('Hi Welcome to the browser')
    }
    else if(req.url==='/about'){
        
        res.end('About page')
    }
    else{
    res.end('OoPS...Landed on the wrong page')
    console.log(req)
    }
})
server.listen(5000)
