import React from "react";

function Form({ data, onInputChange }) {
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
    </form>
  );
}

export default Form;
