import React from "react";

function Form({
  data,
  languageInput,
  onInputChange,
  onLanguageInputChange,
  onAddLanguage,
}) {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={data.phone}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Languages:</label>
        <input
          type="text"
          value={languageInput}
          onChange={onLanguageInputChange}
        />
        <button type="button" onClick={onAddLanguage}>
          +
        </button>
      </div>
      <div>
        <label>Academic Experience:</label>
        <textarea
          name="education"
          value={data.education}
          onChange={onInputChange}
          rows="6"
          cols="30"
        ></textarea>
      </div>
      <div>
        <label>Work Experience:</label>
        <textarea
          name="experience"
          value={data.experience}
          onChange={onInputChange}
          rows="6"
          cols="30"
        ></textarea>
      </div>
      <div>
        <label>Professional Competencies:</label>
        <textarea
          name="proComp"
          value={data.proComp}
          onChange={onInputChange}
          rows="6"
          cols="30"
        ></textarea>
      </div>
      <div>
        <label>Digital Competencies:</label>
        <textarea
          name="digComp"
          value={data.digComp}
          onChange={onInputChange}
          rows="6"
          cols="30"
        ></textarea>
      </div>
    </form>
  );
}

export default Form;
