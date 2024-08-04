import React from "react";

function Curriculum({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <h2>Academic Experience</h2>
      <p>{data.education}</p>
      <h2>Work Experience</h2>
      <p>{data.experience}</p>
      <h2>Professional Competencies</h2>
      <p>{data.proComp}</p>
      <h2>Digital Competencies</h2>
      <p>{data.digComp}</p>
      <h2>Languages</h2>
      <ul>
        {data.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
}

export default Curriculum;
