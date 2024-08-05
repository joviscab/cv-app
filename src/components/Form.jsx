import React, { useState } from "react";

function Form({ curriculumData, setCurriculumData }) {
  const [languageInput, setLanguageInput] = useState("");
  const [editingLanguageIndex, setEditingLanguageIndex] = useState(null);

  const [education, setEducation] = useState({
    institution: "",
    title: "",
    date: "",
  });

  const [educationList, setEducationList] = useState([]);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    date: "",
    duties: "",
  });
  const [experienceList, setExperienceList] = useState([]);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);

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
      setCurriculumData((prevState) => {
        const languages = [...prevState.languages];
        if (editingLanguageIndex !== null) {
          // Update existing language
          languages[editingLanguageIndex] = languageInput.trim();
          setEditingLanguageIndex(null); // Reset index after editing
        } else {
          // Add new language
          languages.push(languageInput.trim());
        }
        return {
          ...prevState,
          languages,
        };
      });
      setLanguageInput("");
    }
  };

  const editLanguage = (index) => {
    setLanguageInput(curriculumData.languages[index]);
    setEditingLanguageIndex(index);
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
      const newEducation = { institution, title, date };

      if (editingEducationIndex !== null) {
        const updatedEducationList = educationList.map((edu, index) =>
          index === editingEducationIndex ? newEducation : edu
        );
        setEducationList(updatedEducationList);
        setCurriculumData((prevState) => ({
          ...prevState,
          education: updatedEducationList,
        }));
        setEditingEducationIndex(null);
      } else {
        const newEducationList = [...educationList, newEducation];
        setEducationList(newEducationList);
        setCurriculumData((prevState) => ({
          ...prevState,
          education: newEducationList,
        }));
      }

      setEducation({
        institution: "",
        title: "",
        date: "",
      });
    }
  };

  const editEducation = (index) => {
    const edu = educationList[index];
    setEducation({
      institution: edu.institution,
      title: edu.title,
      date: edu.date,
    });
    setEditingEducationIndex(index);
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
      const newExperience = { position, company, date, duties };

      if (editingExperienceIndex !== null) {
        const updatedExperienceList = experienceList.map((exp, index) =>
          index === editingExperienceIndex ? newExperience : exp
        );
        setExperienceList(updatedExperienceList);
        setCurriculumData((prevState) => ({
          ...prevState,
          experience: updatedExperienceList,
        }));
        setEditingExperienceIndex(null);
      } else {
        const newExperienceList = [...experienceList, newExperience];
        setExperienceList(newExperienceList);
        setCurriculumData((prevState) => ({
          ...prevState,
          experience: newExperienceList,
        }));
      }

      setExperience({
        position: "",
        company: "",
        date: "",
        duties: "",
      });
    }
  };

  const editExperience = (index) => {
    const exp = experienceList[index];
    setExperience({
      position: exp.position,
      company: exp.company,
      date: exp.date,
      duties: exp.duties,
    });
    setEditingExperienceIndex(index);
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

  const sectionNames = {
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    education: "Studies",
    experience: "Work Experience",
    proComp: "Professional Competencies",
    digComp: "Digital Competencies",
    languages: "Languages",
    image: "Image",
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
              ? `Hide ${
                  sectionNames[section] ||
                  section.charAt(0).toUpperCase() + section.slice(1)
                }`
              : `Expand ${
                  sectionNames[section] ||
                  section.charAt(0).toUpperCase() + section.slice(1)
                }`}
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
                <label>Phone Number:</label>
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
                  {editingEducationIndex !== null
                    ? "Update Education"
                    : "Add Education"}
                </button>
                <ul>
                  {educationList.map((edu, index) => (
                    <li key={index}>
                      <strong>Institution:</strong> {edu.institution} <br />
                      <strong>Title:</strong> {edu.title} <br />
                      <strong>Date:</strong> {edu.date} <br />
                      <button onClick={() => editEducation(index)}>Edit</button>
                    </li>
                  ))}
                </ul>
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
                <label>Responsabilities (separated by comma):</label>
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
                  {editingExperienceIndex !== null
                    ? "Update Experience"
                    : "Add Experience"}
                </button>
                <ul>
                  {experienceList.map((exp, index) => (
                    <li key={index}>
                      <strong>Position Title:</strong> {exp.position} <br />
                      <strong>Company:</strong> {exp.company} <br />
                      <strong>Date:</strong> {exp.date} <br />
                      <strong>Responsibilities:</strong>{" "}
                      <ul>
                        {exp.duties.split("\n").map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                      <button onClick={() => editExperience(index)}>
                        Edit
                      </button>
                    </li>
                  ))}
                </ul>
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
                  {editingLanguageIndex !== null
                    ? "Update Language"
                    : "Add Language"}
                </button>
                <ul>
                  {curriculumData.languages.map((lang, index) => (
                    <li key={index}>
                      {lang}{" "}
                      <button onClick={() => editLanguage(index)}>Edit</button>
                    </li>
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
