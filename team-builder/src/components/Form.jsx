import React, { useState, useEffect } from "react";

//Id Generator
let idCounter = () => {
  let id = 0;
  return function countUp() {
    return id++;
  };
};

const idUp = idCounter();

export default function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    setFormState(props.update);
  }, [props.update]);

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (!props.isUpdating) {
      props.setTeamMember([...props.teamMember, { ...formState, id: idUp() }]);
    } else if (props.isUpdating) {
      //spreadOp
      let updatedList = props.teamMember.filter(
        member => member.id !== formState.id
      );
      let updatedListTwo = [...updatedList, formState];
      props.setTeamMember(updatedListTwo);
    }

    setFormState({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={formState.email}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Position"
          name="role"
          value={formState.role}
          onChange={changeHandler}
        />
        <button>
          {props.isUpdating ? "Update Team Member" : "Join the Family"}
        </button>
      </form>
    </div>
  );
}
