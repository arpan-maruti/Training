import { useState } from "react";
import Students from "./Students";

export default function ListAndKeys() {

  const [students, setStudents] = useState([
    { id: 1, name: "Alice", age: 20, course: "Computer Science" },
    { id: 2, name: "Bob", age: 22, course: "Mechanical Engineering" },
    { id: 3, name: "Charlie", age: 21, course: "Electrical Engineering" },
    { id: 4, name: "David", age: 23, course: "Civil Engineering" },
    { id: 5, name: "Emma", age: 20, course: "Data Science" },
  ]);

  const addStudent = () => {
    const newStudent = {
      id: students.length + 1,
      name: `Student ${students.length + 1}`,
      age: 18, 
      course: "New Course",
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <h1>Student List</h1>
      <button onClick={addStudent} style={{ marginBottom: "10px" }}>
        Add Student
      </button>
      <Students students={students} onDelete={deleteStudent} />
    </>
  );
}
