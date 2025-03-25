import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState("male");
  const [state, setState] = useState("Gujarat");
  const [submittedData, setSubmittedData] = useState(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSkills((prevSkills) => [...prevSkills, value]);
    } else {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, skills, gender, state });
    const formData = { name, email, skills, gender, state };
    setSubmittedData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <label>Skills:</label>
        <div>
          <input
            type="checkbox"
            id="cpp"
            value="C++"
            onChange={handleCheckboxChange}
            checked={skills.includes("C++")}
          />
          <label htmlFor="cpp">C++</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="java"
            value="Java"
            onChange={handleCheckboxChange}
            checked={skills.includes("Java")}
          />
          <label htmlFor="java">Java</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="js"
            value="JavaScript"
            onChange={handleCheckboxChange}
            checked={skills.includes("JavaScript")}
          />
          <label htmlFor="js">JavaScript</label>
        </div>
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            id="male"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value="male"
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value="female"
          />
          Female
        </label>
      </div>
   
      <div>
        <label htmlFor="state">State:</label>
        <select
          id="state"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="Gujarat">Gujarat</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
      </div>

      <button type="submit">Submit</button>
      {submittedData && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Skills:</strong> {submittedData.skills.join(", ")}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
          <p>
            <strong>State:</strong> {submittedData.state}
          </p>
        </div>
      )}
    </form>
  );
}
