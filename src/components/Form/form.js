import React from "react";

import "./form.css";

const Form = () => {
  const takeInput = (event) => {
    event.preventDefault();
    console.log(
      event.target.title.value,
      event.target.text.value,
      event.target.date.value
    );
  };
  return (
    <form onSubmit={takeInput}>
      <div className="maindiv">
        <div>
          <label>Title</label>
          <input type="text" name="title"></input>
        </div>
        <div>
          <label>Opening Text</label>
          <input type="textarea" name="text"></input>
        </div>
        <div>
          <label>Release Date</label>
          <input type="date" name="date"></input>
        </div>
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default Form;
