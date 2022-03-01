const res = require("express/lib/response");
var http=require("http");

let port=2000

  http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'application/json'})
     
   

  //  res.write ('{"msg":"iam a developer"}\n')
  //  res.write ('{"name":"gurusankar"}\n')
  //  res.write ('{"age":"22"}\n')
  //  res.write ('{"company":"myrmc"}\n')

   res.end();   
  
  }).listen(port);