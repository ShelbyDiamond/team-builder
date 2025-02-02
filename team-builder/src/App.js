import React, { useState } from "react";
import "./App.css";
import TeamMemberList from "./components/TeamMemberList";
import Form from "./components/Form";

function App() {
  const [teamMember, setTeamMember] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <div className="App">
      <h2>Team Member Sign Up</h2>
      <Form
        teamMember={teamMember}
        setTeamMember={setTeamMember}
        update={update}
        isUpdating={isUpdating}
      />
      <TeamMemberList
        teamMember={teamMember}
        setUpdate={setUpdate}
        setIsUpdating={setIsUpdating}
      />
    </div>
  );
}

export default App;
