const names: (number|string)[] = [];
names.push("Dylan"); // no error
// names.push(1); Error : Argument of type 'number' is not assignable to parameter of type 'string' 


const names1: readonly string[] = [];
// names1.push("A"); // Error : Property 'push' does not exist on type 'readonly string[]'.
