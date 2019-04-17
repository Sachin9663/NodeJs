const http =require('http');
const sum=require('./myModule');
const port=8080;
const hostname='127.0.0.1';

http.createServer((req,res)=>{
    var val=sum.add(2,3);
    res.writeHead(200,{'Content-type':'text/html'});
    console.log("Sum of two number is ",val);
    res.end("Hello world\n");

}).listen(port,hostname,()=>{
    console.log("Server running at http://",hostname,port);
})
