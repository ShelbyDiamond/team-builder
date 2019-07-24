import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";

const [TeamMember, setTeamMember] = useState({});

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
