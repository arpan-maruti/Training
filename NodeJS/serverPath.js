import path from "path";
import url from "url";

const filename = './dir1/dir2/test.txt';


//basename()
console.log(path.basename(filename)); // output: test.txt

//dirname()
console.log(path.dirname(filename)); // output: ./dir1/dir2

//extname()
console.log(path.extname(filename)); // output: .txt

//parse()
console.log(path.parse(filename)); // output: { root: '', dir: './dir1/dir2', base: 'test.txt', ext: '.txt', name: 'test' }

//__filename, __dirname
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename); // output: /home/arpan/Desktop/Training1/Training/NodeJS/server_fs.js  
console.log(__dirname); // output: /home/arpan/Desktop/Training1/Training/NodeJS


//join()
console.log(path.join(__dirname, 'dir1', 'dir2', 'test.txt')); // output: /home/arpan/Desktop/Training1/Training/NodeJS/dir1/dir2/test.txt

//resolve()
console.log(path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')); // output: /home/arpan/Desktop/Training1/Training/NodeJS/dir1/dir2/test.txt


console.log(path.join('/a', '/b')) // Outputs '/a/b'
console.log(path.resolve('/a', '/b')) // Outputs '/b'

//Examples of path.join()
console.log(path.join('/home', 'user', 'docs', 'file.txt'));
// ➝ '/home/user/docs/file.txt'

console.log(path.join('/home', 'user', '../file.txt'));
// ➝ '/home/file.txt' (resolves `..`)

console.log(path.join('/home', '/user', 'docs')); 
// ➝ '/home/user/docs' (ignores leading `/` in '/user')

//Examples of path.resolve()
console.log(path.resolve('docs', 'file.txt'));
// ➝ '/current/working/directory/docs/file.txt' (CWD is added)

console.log(path.resolve('/home', 'user', 'docs', 'file.txt'));
// ➝ '/home/user/docs/file.txt' (absolute from `/home`)

console.log(path.resolve('/home', '/user', 'docs')); 
// ➝ '/user/docs' (ignores `/home` because `/user` is absolute)



