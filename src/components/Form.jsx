// src/components/Form.jsx

import React, { useState } from "react";

function Form({ curriculumData, setCurriculumData }) {
  const [languageInput, setLanguageInput] = useState("");
  const [education, setEducation] = useState({
    institution: "",
    title: "",
    date: "",
  });
  const [educationList, setEducationList] = useState([]);

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    date: "",
    duties: "",
  });
  const [experienceList, setExperienceList] = useState([]);

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

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addEducation = () => {
    const { institution, title, date } = education;
    if (institution.trim() && title.trim() && date.trim()) {
      const newEducationList = [...educationList, { institution, title, date }];
      setEducationList(newEducationList);
      setEducation({
        institution: "",
        title: "",
        date: "",
      });
      setCurriculumData((prevState) => ({
        ...prevState,
        education: newEducationList,
      }));
    }
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addExperience = () => {
    const { position, company, date, duties } = experience;
    if (position.trim() && company.trim() && date.trim() && duties.trim()) {
      const dutiesArray = duties.split(",").map((duty) => duty.trim());

      const newExperienceList = [
        ...experienceList,
        { position, company, date, duties: dutiesArray },
      ];
      setExperienceList(newExperienceList);
      setExperience({
        position: "",
        company: "",
        date: "",
        duties: "",
      });
      setCurriculumData((prevState) => ({
        ...prevState,
        experience: newExperienceList,
      }));
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
                <label>Institution Name:</label>
                <input
                  type="text"
                  name="institution"
                  value={education.institution}
                  onChange={handleEducationChange}
                />
                <label>Title of Study:</label>
                <input
                  type="text"
                  name="title"
                  value={education.title}
                  onChange={handleEducationChange}
                />
                <label>Date of Study:</label>
                <input
                  type="text"
                  name="date"
                  value={education.date}
                  onChange={handleEducationChange}
                />
                <button
                  className="add-education-button"
                  type="button"
                  onClick={addEducation}
                >
                  Add Education
                </button>
              </>
            )}
            {section === "experience" && (
              <>
                <label>Position Title:</label>
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={handleExperienceChange}
                />
                <label>Company Name:</label>
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={handleExperienceChange}
                />
                <label>Date (from - until):</label>
                <input
                  type="text"
                  name="date"
                  value={experience.date}
                  onChange={handleExperienceChange}
                />
                <label>Responsabilities:</label>
                <input
                  type="text"
                  name="duties"
                  value={experience.duties}
                  onChange={handleExperienceChange}
                />
                <button
                  className="add-experience-button"
                  type="button"
                  onClick={addExperience}
                >
                  Add Experience
                </button>
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
