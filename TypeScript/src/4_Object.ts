const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);

// const car1: { type1: string, mileage1: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type1: "Toyota",
// };
// car.mileage1 = 2000;

//Use Optional Type
const car2: { type2: string, mileage2?: number } = { 
  type2: "Toyota",
};
console.log(car2.mileage2);
car2.mileage2 = 2000;

// Index Signatures 
const nameMap: { [index: string]:number}={};
nameMap.Arpan=20;
// nameMap.Arpan="20"; // ERROR : Type 'string' is not assignable to type 'number'.
console.log(nameMap);
