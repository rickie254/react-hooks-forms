import React from "react";

function Form({firstName, lastName, handleFormChange}) {

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFormChange} name="firstName"/>
      <input type="text" value={lastName} onChange={handleFormChange} name="lastName"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;