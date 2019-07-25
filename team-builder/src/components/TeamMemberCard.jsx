import React from "react";

export default function TeamMemberCard(props) {
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
      <button>Edit</button>
    </div>
  );
}
