type Person3 = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    position: string;
};

// Intersection type: Combines Person and Employee
type PersonEmployee = Person3 & Employee;

const personEmployee: PersonEmployee = {
    name: "Alice",
    age: 30,
    employeeId: 101,
    position: "Developer",
};

console.log(personEmployee); // { name: 'Alice', age: 30, employeeId: 101, position: 'Developer' }
