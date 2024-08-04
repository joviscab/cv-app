import React from "react";

function Curriculum({ data }) {
  return (
    <>
      <h1 className="nameCV">{data.name}</h1>
      <p className="emailCV">Email: {data.email}</p>
      <p className="phoneCV">Phone: {data.phone}</p>
      <h2 className="workCV">Work Experience</h2>
      <p className="workContentCV">{data.experience}</p>
      <h2 className="academicCV">Academic Experience</h2>
      <p className="academicContentCV">{data.education}</p>
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
