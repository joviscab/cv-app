import React from "react";

function Curriculum({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Phone: {data.phone}</p>
      <p>Email: {data.email}</p>
      <h2>Education</h2>
      <p>{data.education}</p>
      <h2>Experience</h2>
      <p>{data.experience}</p>
    </div>
  );
}

export default Curriculum;
