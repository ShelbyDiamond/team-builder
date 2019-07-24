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
    <div className="inputting-form">
      <form>
        <label>
          Name:{" "}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name Here"
            value
          />
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
      </form>
    </div>
  );
}
