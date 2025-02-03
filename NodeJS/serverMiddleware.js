import { createServer } from "http";
const PORT = process.env.PORT || 5000;

const Users = [
  {
    id: 1,
    name: "Arpan",
    age: 21,
  },
  {
    id: 2,
    name: "Aman",
    age: 22,
  },
  {
    id: 3,
    name: "Ankit",
    age: 23,
  },
];

//Logger Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); // output: GET /api/users/1
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(Users));
  res.end();
};

//Route Handler for GET /api/users/:id
const getUsersByIdHandler = (req, res) => {
    const id = req.url.split("/")[3];
    const user = Users.find((u) => u.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.write(JSON.stringify({ message: "User Not Found" }));
        res.end();
    }
}

//Route Handler for Not Found
const notFoundHandler = (req, res) => {
    res.write(JSON.stringify({ message: "Route Not Found" }));
    res.end();
}

//Route Handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        const newUser = JSON.parse(body);
        Users.push(newUser);
        res.write(JSON.stringify(newUser));
        res.end();
    });
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
        getUsersByIdHandler(req, res);
      }else if (req.url === "/api/users" && req.method === "POST") {
        console.log('POST');
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
});
  });


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
