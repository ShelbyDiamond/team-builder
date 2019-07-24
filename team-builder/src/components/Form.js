import React, { useState } from "react";

export default function Form() {
  const [TeamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  function changeHandler(event) {
    const createUser = {
      ...TeamMember,
      [event.target.name]: event.target.value
    };
    setTeamMember(createUser);
  }

  const submitHandler = e => {
    e.preventdefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <legend>Team Member Sign Up</legend>
        <label for="username">
          Name
          <div className="inputting-form">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Name Here"
              value={TeamMember.name}
              onChange={changeHandler}
            />
          </div>
        </label>

        <label for="email">
          Email
          <div className="inputting-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name Here"
              value={TeamMember.name}
              onChange={changeHandler}
            />
          </div>
        </label>

        <label for="username">
          role
          <div className="inputting-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name Here"
              value={TeamMember.name}
              onChange={changeHandler}
            />
          </div>
          <button>Submit</button>
        </label>
      </fieldset>
    </form>
  );
}
