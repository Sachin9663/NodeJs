const http=require("http");
const fs=require("fs");

const port =8081;
const hostname='127.0.0.1';

http.createServer((req,res)=>{
    console.log("file not reden yet");
    fs.readFile('file1.html',(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        console.log("end of reading file");
    });
    console.log("End of code");
}).listen(port,hostname,()=>{
    console.log("Server running at http://",hostname,port);
})