import fs from "fs";
import { createServer } from "http";
const PORT = process.env.PORT || 5000;

const data = fs.readFileSync("./Users.json", "utf-8");
const Users = JSON.parse(data);

const server = createServer((req, res) => {
  try {
    if (req.url === "/api/users" && req.method === "GET") {
      

      res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(Users));
    } else if (
      req.url.match(/\/api\/users\/([1-3])/) &&
      req.method === "GET"
    ) {
      
        const id = req.url.split("/")[3];
        const user = Users.find((u) => u.id === parseInt(id));
        if (user) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(user));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "User Not Found" }));
        }
    } else {
      res.statusCode = 404;
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route Not Found" }));
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
