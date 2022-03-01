const http =require("http");
const hostname="localhost";

let port=2100;
 
const server=http.createServer(function(req,res){
    res.statusCode=200;
      res.setHeader=("content-type,text/html")

      switch (req.url){

      case "/room":
             res.write("this room cool");
             res.end();
             break;

       case "/classroom":
             res.write("this classroom is dirty");
             res.end();
             break;

             default: guru
                 break;
    }

})
   server.listen(port,hostname,()=>{
       console.log("server is running")
   })