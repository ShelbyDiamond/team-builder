import React, { useState } from "react";
import "./App.css";
import TeamMemberList from "./components/TeamMemberList";
import Form from "./components/Form";

function App() {
  const [teamMember, setTeamMember] = useState([]);
  return (
    <div className="App">
      <h2>Team Member Sign Up</h2>
      <Form teamMember={teamMember} setTeamMember={setTeamMember} />
      <TeamMemberList teamMember={teamMember} />
    </div>
  );
}

export default App;
