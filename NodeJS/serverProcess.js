//argv 
console.log(process.argv); //npx nodemon server_process.js arpan : output: [ '/usr/bin/node', '/home/arpan/Desktop/Training1/Training/NodeJS/server_process.js', 'arpan' ]
console.log(process.argv[2]); // output: arpan

//process.env
console.log(process.env); //output: { ... }
console.log(process.env.USER); //output: arpan
console.log(process.env.LOGNAME); //output: arpan

//process.pid
console.log(process.pid); //output: 12345

//process.platform
console.log(process.platform); //output: linux

//process.cwd()
console.log(process.cwd()); //output: /home/arpan/Desktop/Training1/Training/NodeJS

//title
console.log(process.title); //output: /usr/bin/node

//process.memoryUsage()
console.log(process.memoryUsage()); //output: { rss: 22544384, heapTotal: 5767168, heapUsed: 3579000, external: 8772 }

//process.uptime()
console.log(process.uptime()); //output: 0.123

//exit()
process.on("exit", function (code) {
  console.log("Exiting Code : "+code); //output: Exiting Code : 0
});
process.exit(0);
console.log("This will not be printed."); //output: 