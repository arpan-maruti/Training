import Students from './Students';
export default function ListAndKeys (){

    const students = [
        { id: 1, name: "Alice", age: 20, course: "Computer Science" },
        { id: 2, name: "Bob", age: 22, course: "Mechanical Engineering" },
        { id: 3, name: "Charlie", age: 21, course: "Electrical Engineering" },
        { id: 4, name: "David", age: 23, course: "Civil Engineering" },
        { id: 5, name: "Emma", age: 20, course: "Data Science" }
      ];

      return(
        <>
            <h1> Student List </h1>
            <Students students={students} />
        </>
      );
}