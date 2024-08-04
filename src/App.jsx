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
    proComp: "",
    digComp: "",
    languages: [],
  });

  const [languageInput, setLanguageInput] = useState("");
  const [formVisibility, setFormVisibility] = useState({
    name: true,
    email: false,
    phone: false,
    education: false,
    experience: false,
    proComp: false,
    digComp: false,
    languages: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurriculumData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLanguageInputChange = (e) => {
    setLanguageInput(e.target.value);
  };

  const addLanguage = () => {
    if (languageInput.trim()) {
      setCurriculumData((prevState) => ({
        ...prevState,
        languages: [...prevState.languages, languageInput.trim()],
      }));
      setLanguageInput("");
    }
  };

  const toggleSectionVisibility = (section) => {
    setFormVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("name")}
            className="expandable-header"
          >
            {formVisibility.name ? "Hide Name" : "Expand Name"}
          </h3>
          <div
            className={`form-content ${formVisibility.name ? "visible" : ""}`}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={curriculumData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("email")}
            className="expandable-header"
          >
            {formVisibility.email ? "Hide Email" : "Expand Email"}
          </h3>
          <div
            className={`form-content ${formVisibility.email ? "visible" : ""}`}
          >
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={curriculumData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("phone")}
            className="expandable-header"
          >
            {formVisibility.phone ? "Hide Phone" : "Expand Phone"}
          </h3>
          <div
            className={`form-content ${formVisibility.phone ? "visible" : ""}`}
          >
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={curriculumData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("education")}
            className="expandable-header"
          >
            {formVisibility.education
              ? "Hide Academic Experience"
              : "Expand Academic Experience"}
          </h3>
          <div
            className={`form-content ${
              formVisibility.education ? "visible" : ""
            }`}
          >
            <label>Academic Experience:</label>
            <textarea
              name="education"
              value={curriculumData.education}
              onChange={handleInputChange}
              rows="6"
              cols="30"
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("experience")}
            className="expandable-header"
          >
            {formVisibility.experience
              ? "Hide Work Experience"
              : "Expand Work Experience"}
          </h3>
          <div
            className={`form-content ${
              formVisibility.experience ? "visible" : ""
            }`}
          >
            <label>Work Experience:</label>
            <textarea
              name="experience"
              value={curriculumData.experience}
              onChange={handleInputChange}
              rows="6"
              cols="30"
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("proComp")}
            className="expandable-header"
          >
            {formVisibility.proComp
              ? "Hide Professional Competencies"
              : "Expand Professional Competencies"}
          </h3>
          <div
            className={`form-content ${
              formVisibility.proComp ? "visible" : ""
            }`}
          >
            <label>Professional Competencies:</label>
            <textarea
              name="proComp"
              value={curriculumData.proComp}
              onChange={handleInputChange}
              rows="6"
              cols="30"
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("digComp")}
            className="expandable-header"
          >
            {formVisibility.digComp
              ? "Hide Digital Competencies"
              : "Expand Digital Competencies"}
          </h3>
          <div
            className={`form-content ${
              formVisibility.digComp ? "visible" : ""
            }`}
          >
            <label>Digital Competencies:</label>
            <textarea
              name="digComp"
              value={curriculumData.digComp}
              onChange={handleInputChange}
              rows="6"
              cols="30"
            ></textarea>
          </div>
        </div>

        <div className="form-section">
          <h3
            onClick={() => toggleSectionVisibility("languages")}
            className="expandable-header"
          >
            {formVisibility.languages ? "Hide Languages" : "Expand Languages"}
          </h3>
          <div
            className={`form-content ${
              formVisibility.languages ? "visible" : ""
            }`}
          >
            <label>Languages:</label>
            <input
              type="text"
              value={languageInput}
              onChange={handleLanguageInputChange}
            />
            <button
              className="add-language-button"
              type="button"
              onClick={addLanguage}
            >
              Add Language
            </button>
          </div>
        </div>
      </div>
      <div className="curriculum-container">
        <Curriculum data={curriculumData} />
      </div>
    </div>
  );
}

export default App;
