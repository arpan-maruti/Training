function printCode(code: string | number)
{
    console.log(code);
    //console.log(code.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
}
printCode(10);
printCode("Hello");
// printCode(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.

