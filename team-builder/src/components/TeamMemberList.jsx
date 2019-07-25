import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamMemberList(props) {
  return (
    <div>
      {props.teamMember.map(member => (
        <TeamMemberCard member={member} />
      ))}
    </div>
  );
}
