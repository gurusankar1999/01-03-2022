
const http=require("http");
const hostname="localhost";

let port=2000;

const server=http.createServer(function(req,res){
    res.statusCode=200;
   res.setHeader("content-type",'text/html')
   

switch(req.url){

case "/bike" :

      res.write("one of the new model bike") 
      res.end();
      break;

   case "/car":
        
         res.write("thisis new model BMW car ")
         res.end();
         break;

        default:
            break;
        
}
});
server.listen(port,hostname,()=>{
console.log("server is running")

});