import React, { useState, useEffect } from "react";

function Form({ curriculumData, setCurriculumData }) {
  const [languageInput, setLanguageInput] = useState("");
  const [editingLanguageIndex, setEditingLanguageIndex] = useState(null);

  useEffect(() => {
    setEducationList(curriculumData.education || []);
    setExperienceList(curriculumData.experience || []);
  }, [curriculumData.education, curriculumData.experience]);

  const [proCompInput, setProCompInput] = useState("");
  const [editingProCompIndex, setEditingProCompIndex] = useState(null);

  const [digCompInput, setDigCompInput] = useState("");
  const [editingDigCompIndex, setEditingDigCompIndex] = useState(null);

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
    personalInfo: true,
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
      setCurriculumData((prevState) => {
        const languages = [...prevState.languages];
        if (editingLanguageIndex !== null) {
          languages[editingLanguageIndex] = languageInput.trim();
          setEditingLanguageIndex(null);
        } else {
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

  const removeLanguage = (index) => {
    const newLanguageList = curriculumData.languages.filter(
      (_, i) => i !== index
    );
    setCurriculumData((prevState) => ({
      ...prevState,
      languages: newLanguageList,
    }));
  };

  const editLanguage = (index) => {
    setLanguageInput(curriculumData.languages[index]);
    setEditingLanguageIndex(index);
  };

  const handleProCompInputChange = (e) => {
    setProCompInput(e.target.value);
  };

  const addProComp = () => {
    if (proCompInput.trim()) {
      setCurriculumData((prevState) => {
        const proComp = [...prevState.proComp];
        if (editingProCompIndex !== null) {
          proComp[editingProCompIndex] = proCompInput.trim();
          setEditingProCompIndex(null);
        } else {
          proComp.push(proCompInput.trim());
        }
        return {
          ...prevState,
          proComp,
        };
      });
      setProCompInput("");
    }
  };

  const removeProComp = (index) => {
    const newProCompList = curriculumData.proComp.filter((_, i) => i !== index);
    setCurriculumData((prevState) => ({
      ...prevState,
      proComp: newProCompList,
    }));
  };

  const editProComp = (index) => {
    setProCompInput(curriculumData.proComp[index]);
    setEditingProCompIndex(index);
  };

  const handleDigCompInputChange = (e) => {
    setDigCompInput(e.target.value);
  };

  const addDigComp = () => {
    if (digCompInput.trim()) {
      setCurriculumData((prevState) => {
        const digComp = [...prevState.digComp];
        if (editingDigCompIndex !== null) {
          digComp[editingDigCompIndex] = digCompInput.trim();
          setEditingDigCompIndex(null);
        } else {
          digComp.push(digCompInput.trim());
        }
        return {
          ...prevState,
          digComp,
        };
      });
      setDigCompInput("");
    }
  };

  const removeDigComp = (index) => {
    const newDigCompList = curriculumData.digComp.filter((_, i) => i !== index);
    setCurriculumData((prevState) => ({
      ...prevState,
      digComp: newDigCompList,
    }));
  };

  const editDigComp = (index) => {
    setDigCompInput(curriculumData.digComp[index]);
    setEditingDigCompIndex(index);
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

  const removeEducation = (index) => {
    const newEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(newEducationList);
    setCurriculumData((prevState) => ({
      ...prevState,
      education: newEducationList,
    }));
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

  const removeExperience = (index) => {
    const newExperienceList = experienceList.filter((_, i) => i !== index);
    setExperienceList(newExperienceList);
    setCurriculumData((prevState) => ({
      ...prevState,
      experience: newExperienceList,
    }));
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
    personalInfo: "Personal Info",
    education: "Studies",
    experience: "Work Experience",
    proComp: "Professional Competencies",
    digComp: "Digital Competencies",
    languages: "Languages",
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
            {section === "personalInfo" && (
              <>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  maxLength="32"
                  value={curriculumData.name}
                  onChange={handleInputChange}
                />
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  maxLength="36"
                  value={curriculumData.email}
                  onChange={handleInputChange}
                />
                <label>Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  maxLength="25"
                  value={curriculumData.phone}
                  onChange={handleInputChange}
                />
                <label>Bio (maximum 850 characters):</label>
                <textarea
                  type="text"
                  maxLength="850"
                  name="bio"
                  value={curriculumData.bio}
                  onChange={handleInputChange}
                />
                <label>Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
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
                      <button onClick={() => removeEducation(index)}>
                        Remove
                      </button>
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
                      <button onClick={() => removeExperience(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {section === "proComp" && (
              <>
                <label>Professional Competencies:</label>
                <input
                  type="text"
                  name="proComp"
                  value={proCompInput}
                  onChange={handleProCompInputChange}
                />
                <button
                  className="add-proComp-button"
                  type="button"
                  onClick={addProComp}
                >
                  {editingProCompIndex !== null
                    ? "Update Professional Competencies"
                    : "Add Professional Competencies"}
                </button>
                <ul>
                  {curriculumData.proComp.map((pro, index) => (
                    <li key={index}>
                      {pro}{" "}
                      <button onClick={() => editProComp(index)}>Edit</button>
                      <button onClick={() => removeProComp(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {section === "digComp" && (
              <>
                <label>Digital Competencies:</label>
                <input
                  type="text"
                  name="digComp"
                  value={digCompInput}
                  onChange={handleDigCompInputChange}
                />
                <button
                  className="add-digComp-button"
                  type="button"
                  onClick={addDigComp}
                >
                  {editingDigCompIndex !== null
                    ? "Update Digital Competencies"
                    : "Add Digital Competencies"}
                </button>
                <ul>
                  {curriculumData.digComp.map((dig, index) => (
                    <li key={index}>
                      {dig}{" "}
                      <button onClick={() => editDigComp(index)}>Edit</button>
                      <button onClick={() => removeDigComp(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
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
                      <button onClick={() => removeLanguage(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Form;
