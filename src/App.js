import { useState } from "react";
import DeleteMembers from "./components/DeleteMembers/DeleteMembers";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Piero Sabino",
    },
    {
      id: 1,
      name: "Edmondo di Ronza",
    },
    {
      id: 2,
      name: "Giorgio Coppola",
    },
    {
      id: 3,
      name: "Francesco Rua",
    },
  ]);

  // Create a new state to save only Team leader
  const [teamLeader, setTeamLeader] = useState(members[0]);

  //Function add Member
  const addMember = (e) => {
    e.preventDefault();
    const newMember = {
      id: (members.length - 1) + 1,
      name: e.target.name.value,
    };
    setMembers([...members, newMember]);
    console.log(newMember); //Show the new member in console
    e.target.name.value = ""; //Clear the input field
  };

  //Function delete Members array
  const handleReset = () => {
    setMembers([]);
  };

  //Show the team leader and team members in console
  console.log(teamLeader);
  console.log(members);

  return (
    <div style={{ margin: "3% 40%" }}>
      <h1 style={{ textAlign: "center", margin: "3% 5%", fontSize: "5rem" }}>
        Team
      </h1>
      {/* Form*/}
      <Form addMember={addMember} />
      <h2>Team Leader</h2>
      {/* Show the team leader */}
      <h3 className="teamLeader">{teamLeader.name}</h3>
      <h2>Team Members</h2>
      {/* Show the team members */}
      <List
        members={members}
        setTeamLeader={setTeamLeader}
        setMembers={setMembers}
      />
      {/* Cancel the array with the reset button */}
      <DeleteMembers handleReset={handleReset} />
    </div>
  );
}

export default App;
