import http from "http";
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  console.log(req.url); // output: /
  console.log(req.method); // output: GET
  // res.write('<h1>Hello World</h1>\n');


  try
  {
    if(req.method==='GET')
    {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "HomePage" }));
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "AboutPage" }));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Not Found" }));
      }
    }
    else
    {
      throw new Error('Method Not Allowed')
    }
  }
  catch(err){
    res.writeHead(500, { "Content-Type": "application/plain" });
    res.end('Server Error');
  }

  //    res.statusCode = 404;
  //    res.setHeader('Content-Type', 'text/html');
  
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
