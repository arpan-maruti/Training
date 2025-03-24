import './Students.css';

export default function Students({ students, onDelete }) {
  return (
    <ul className="students-list">
      {students.map((student) => (
        <li key={student.id} className="student-card">
          <p className="student-info"><strong>Name:</strong> {student.name}</p>
          <p className="student-info"><strong>Age:</strong> {student.age}</p>
          <p className="student-info"><strong>Course:</strong> {student.course}</p>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
