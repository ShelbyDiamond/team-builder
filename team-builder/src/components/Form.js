import React, { useState } from "react";

export default function Form() {
  const [TeamMember, setTeamMember] = useState({});

  function changeHandler(event) {
    const createUser = {
      ...TeamMember,
      [event.target.name]: event.target.value
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Team Member Sign Up</legend>
        <label for="username">
          Name //{" "}
          <div className="inputting-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name Here"
              value={Teammember.name}
              onChange={handleChange}
            />
          </div>
        </label>

        <label>
          Email:{" "}
          <input
            type="email"
            placeholder="example: BentleySwizzleton@gmail.com"
          />
        </label>

        <label>
          Role: <input type="text" placeholder="Enter your role here" />
        </label>
      </fieldset>
    </form>
  );
}
