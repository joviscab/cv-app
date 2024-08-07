import React from "react";

function Curriculum({ data }) {
  return (
    <>
      {data.image && (
        <img src={data.image} alt="Profile" className="profile-image" />
      )}
      <div className="circle"></div>
      <h1 className="aboutCV">About me</h1>
      <h1 className="contactCV">Contact</h1>
      <p className="bioCV">{data.bio}</p>
      <div className="emailCV">
        <img className="email-icon" src="/img/email.png" alt="" />
        {data.email}
      </div>
      <div className="phoneCV">
        <img className="phone-icon" src="/img/phone.png" alt="" />
        {data.phone}
      </div>
      <h2 className="languageCV">Languages</h2>
      <ul className="langContentCV">
        {data.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <h1 className="nameCV">{data.name}</h1>
      <h2 className="workCV">Work Experience</h2>
      <ul className="workContentCV">
        {data.experience.map((exp, index) => (
          <li key={index}>
            <strong>Position Title:</strong> {exp.position} <br />
            <strong>Company:</strong> {exp.company} <br />
            <strong>Date:</strong> {exp.date} <br />
            <strong>Responsibilities:</strong>
            <ul>
              {exp.duties.split("\n").map((duty, i) => (
                <li key={i}>{duty}</li>
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
      <ul className="proContentCV">
        {data.proComp.map((pro, index) => (
          <li key={index}>{pro}</li>
        ))}
      </ul>
      <h2 className="digitalCV">Digital Competencies</h2>
      <ul className="digContentCV">
        {data.digComp.map((dig, index) => (
          <li key={index}>{dig}</li>
        ))}
      </ul>
    </>
  );
}

export default Curriculum;
