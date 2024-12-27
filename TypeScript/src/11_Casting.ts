let x: unknown = 'hello';
console.log((x as string).length);  // 5
console.log((<string>x).length); // equivalent to the above line // 5

