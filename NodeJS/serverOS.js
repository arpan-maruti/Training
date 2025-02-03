import os, { userInfo } from 'os';

//userInfo()
console.log(os.userInfo()); // output: { uid: 1000, gid: 1000, username: 'arpan', homedir: '/home/arpan', shell: '/bin/bash' }

//totalmem()
console.log(os.totalmem()); // output: 16317106176

//freemem()
console.log(os.freemem()); // output: 7899267072

//cpus()
console.log(os.cpus()); // output:  {model: 'Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz',speed: 800,times: { user: 1664610, nice: 1070, sys: 322400, idle: 20172790, irq: 0 }},

