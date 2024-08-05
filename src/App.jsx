import { useState } from "react";
import Form from "../src/components/Form.jsx";
import Curriculum from "../src/components/Curriculum.jsx";
import "../src/styles/App.css";

function App() {
  const defaultImage = "/img/sorriso.jpg";

  const [curriculumData, setCurriculumData] = useState({
    name: "Sorriso Pérez Schmutzler",
    email: "joviscab@gmail.com",
    phone: "+34 123 456 789",
    education: [],
    experience: [],
    proComp: [],
    digComp: "",
    languages: [],
    image: defaultImage,
  });

  return (
    <div className="App">
      <Form
        curriculumData={curriculumData}
        setCurriculumData={setCurriculumData}
      />
      <div className="curriculum-container">
        <Curriculum data={curriculumData} />
      </div>
    </div>
  );
}

export default App;
