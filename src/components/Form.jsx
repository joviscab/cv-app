// src/components/Form.jsx

import React, { useState } from "react";

function Form({ curriculumData, setCurriculumData }) {
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
    image: false,
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurriculumData((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      {Object.keys(formVisibility).map((section) => (
        <div className="form-section" key={section}>
          <h3
            onClick={() => toggleSectionVisibility(section)}
            className="expandable-header"
          >
            {formVisibility[section]
              ? `Hide ${section.charAt(0).toUpperCase() + section.slice(1)}`
              : `Expand ${section.charAt(0).toUpperCase() + section.slice(1)}`}
          </h3>
          <div
            className={`form-content ${
              formVisibility[section] ? "visible" : ""
            }`}
          >
            {section === "name" && (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={curriculumData.name}
                  onChange={handleInputChange}
                />
              </>
            )}
            {section === "email" && (
              <>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={curriculumData.email}
                  onChange={handleInputChange}
                />
              </>
            )}
            {section === "phone" && (
              <>
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={curriculumData.phone}
                  onChange={handleInputChange}
                />
              </>
            )}
            {section === "education" && (
              <>
                <label>Academic Experience:</label>
                <textarea
                  name="education"
                  value={curriculumData.education}
                  onChange={handleInputChange}
                  rows="6"
                  cols="30"
                />
              </>
            )}
            {section === "experience" && (
              <>
                <label>Work Experience:</label>
                <textarea
                  name="experience"
                  value={curriculumData.experience}
                  onChange={handleInputChange}
                  rows="6"
                  cols="30"
                />
              </>
            )}
            {section === "proComp" && (
              <>
                <label>Professional Competencies:</label>
                <textarea
                  name="proComp"
                  value={curriculumData.proComp}
                  onChange={handleInputChange}
                  rows="6"
                  cols="30"
                />
              </>
            )}
            {section === "digComp" && (
              <>
                <label>Digital Competencies:</label>
                <textarea
                  name="digComp"
                  value={curriculumData.digComp}
                  onChange={handleInputChange}
                  rows="6"
                  cols="30"
                />
              </>
            )}
            {section === "languages" && (
              <>
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
                <ul>
                  {curriculumData.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </>
            )}
            {section === "image" && (
              <>
                <label>Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Form;
