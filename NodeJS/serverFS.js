import fs from "fs/promises";
import * as fs1 from "fs";
import url from "url";
import path from "path";
import http from "http";
const PORT = process.env.PORT || 5000;

// Get the filename of the current module
const __filename = url.fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = path.dirname(__filename);

console.log(__filename); // output: /home/arpan/Desktop/Training1/Training/NodeJS/server_fs.js
console.log(__dirname); // output: /home/arpan/Desktop/Training1/Training/NodeJS

// readFile() - Callback -Asyncronus Version
fs1.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Asyncronus : " + data);
});

// readFileSync() - Syncronus Version
const data = fs1.readFileSync("./test.txt", "utf8");
console.log("Syncronus : " + data);

const syncData= "App. data.";
fs1.writeFileSync("./test.txt", syncData);  

// readFile() - Promise - Asyncronus Version
fs.readFile("./test.txt", "utf8")
  .then((data) => {
    console.log("Promise : " + data);
  })
  .catch((err) => {
    console.log(err);
  });

// readFile() - async/await - Asyncronus Version
const readData = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log("Async/Await : " + data);
  } catch (err) {
    console.log(err);
  }
};

//writeFile() - async/await - Asyncronus Version
const writeData = async () => {
  try {
    await fs.writeFile("./test.txt", "Writing in file.");
    console.log("Data Written");
  } catch (err) {
    console.log(err);
  }
};

writeData();

//appendFile() - async/await - Asyncronus Version
const appendData = async () => {
  try {
    await fs.appendFile("./test.txt", "\nAppending in file.");
    console.log("Data Appended");
  } catch (err) {
    console.log(err);
  }
};



appendData();
readData();

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "home.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method Not Allowed");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//output:
// /home/arpan/Desktop/Training1/Training/NodeJS/server_fs.js
// /home/arpan/Desktop/Training1/Training/NodeJS
// Syncronus : Writing in file.
// Appending in file.
// Server is running on port 5000
// Data Written
// Data Appended
// Async/Await : Writing in file.
// Appending in file.
// Asyncronus : Writing in file.
// Appending in file.
// Promise : Writing in file.
// Appending in file.
