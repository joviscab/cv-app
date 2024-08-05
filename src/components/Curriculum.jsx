import React from "react";

function Curriculum({ data }) {
  return (
    <>
      {data.image && (
        <div className="profile-image-container">
          <img src={data.image} alt="Profile" className="profile-image" />
        </div>
      )}
      <h1 className="nameCV">{data.name}</h1>
      <p className="emailCV">Email: {data.email}</p>
      <p className="phoneCV">Phone: {data.phone}</p>
      <h2 className="workCV">Work Experience</h2>
      <ul className="workContentCV">
        {data.experience.map((exp, index) => (
          <li key={index}>
            <strong>Position Title:</strong> {exp.position} <br />
            <strong>Company:</strong> {exp.company} <br />
            <strong>Date:</strong> {exp.date}
            <strong>Responsabilities:</strong>
            <ul>
              {exp.duties.map((duty, idx) => (
                <li key={idx}>{duty}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className="academicCV">Academic Experience</h2>
      <ul className="academicContentCV">
        {data.education.map((edu, index) => (
          <li key={index}>
            <strong>Institution:</strong> {edu.institution} <br />
            <strong>Title:</strong> {edu.title} <br />
            <strong>Date:</strong> {edu.date}
          </li>
        ))}
      </ul>
      <h2 className="professionalCV">Professional Competencies</h2>
      <p className="proContentCV">{data.proComp}</p>
      <h2 className="digitalCV">Digital Competencies</h2>
      <p className="digContentCV">{data.digComp}</p>
      <h2 className="languageCV">Languages</h2>
      <ul className="langContentCV">
        {data.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </>
  );
}

export default Curriculum;
