const http=require("http");
const fs=require("fs");

const port =8081;
const hostname='127.0.0.1';

http.createServer((req,res)=>{
    console.log("file not reden yet");
    const data=fs.readFileSync('file1.html')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        console.log("end of reading file");
    console.log("End of code");
}).listen(port,hostname,()=>{
    console.log("Server running at http://",hostname,port);
})