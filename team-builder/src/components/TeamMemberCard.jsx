import React from "react";

export default function TeamMemberCard(props) {
  const clicker = () => {
    props.setUpdate(props.member);
    props.setIsUpdating(true);
  };

  return (
    <div>
      <p>
        <strong>Name: </strong> {props.member.name}
      </p>
      <p>
        <strong>Email: </strong> {props.member.email}
      </p>
      <p>
        <strong>Role: </strong> {props.member.role}
      </p>
      <button onClick={clicker}>Update</button>
    </div>
  );
}
