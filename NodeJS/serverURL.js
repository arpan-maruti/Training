import url from "url";

const urlString = "https://www.example.com:8080/hello?name=arpan&age=25";

//URL Object
const urlObject = new URL(urlString);
console.log(urlObject);
//OUTPUT: 
// URL {
//     href: 'https://www.example.com:8080/hello?name=arpan&age=25',
//     origin: 'https://www.example.com:8080',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.example.com:8080',
//     hostname: 'www.example.com',
//     port: '8080',
//     pathname: '/hello',
//     search: '?name=arpan&age=25',
//     searchParams: URLSearchParams { 'name' => 'arpan', 'age' => '25' },
//     hash: ''
//   }


//format()
console.log(url.format(urlObject)); //output: https://www.example.com:8080/hello?name=arpan&age=25

//import.meta.url - file URL
console.log(import.meta.url); //output: file:///home/arpan/Desktop/Training1/Training/NodeJS/server_url.js

//fileURLToPath()
console.log(url.fileURLToPath(import.meta.url)); //output: /home/arpan/Desktop/Training1/Training/NodeJS/server_url.js

//search()
console.log(urlObject.search); //output: ?name=arpan&age=25

//URLSearchParams()
const params = new URLSearchParams(urlObject.search);
console.log(params); //output: URLSearchParams { 'name' => 'arpan', 'age' => '25' }
console.log(params.get("name")); //output: arpan
params.append("city", "Veraval");
console.log(params); //output: URLSearchParams { 'name' => 'arpan', 'age' => '25', 'city' => 'Veraval' }
params.delete("age");
console.log(params); //output: URLSearchParams { 'name' => 'arpan', 'city' => 'Veraval' }

//on server we can pars querystring by
// const {query , pathname } =url.parse(req.url,true); 