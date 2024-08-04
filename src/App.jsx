import { useState } from "react";
import Form from "../src/components/Form.jsx";
import Curriculum from "../src/components/Curriculum.jsx";
import "../src/styles/App.css";

function App() {
  const [curriculumData, setCurriculumData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurriculumData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div className="form-container">
        <Form data={curriculumData} onInputChange={handleInputChange} />
      </div>
      <div className="curriculum-container">
        <Curriculum data={curriculumData} />
      </div>
    </div>
  );
}

export default App;
