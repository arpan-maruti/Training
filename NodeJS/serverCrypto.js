import crypto from 'crypto';



//createHash();
const hash = crypto.createHash('sha256');
hash.update('Hello World');
console.log("createHash : "+ hash.digest('hex')); //output: 2ef7bde608ce5404e97d5f042f95f89f1c232871d9b502d1c828f4da2ac7f9b1

// randomBytes()
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log("randomBytes : " + buf.toString('hex')); //output: 2ef7bde608ce5404e97d5f042f95f89f
});

// createCipheriv() and createDecipheriv()
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('My name is Arpan.', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log("Encrypted : "+encrypted); //output: 2a9a680908408f35df090f40d88c1c713bd7a1c26d9429d3aa2d9d003568f3a5

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log("Decrypted : "+decrypted); //output: My name is Arpan.




