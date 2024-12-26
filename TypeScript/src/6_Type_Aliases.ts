type name = string;
type age = number;
type Person2 =
{
  Name:name,
  Age: age  
};
const myName:name = "Arpan";
const myAge:age = 20;

const person1:Person2 = 
{
    Name: myName,
    Age: myAge
}
console.log(person1);

//Can't Merge
type User = {
    id: number;
};

// Error: Duplicate identifier 'User'
// type User = {
//     name: string;
// };