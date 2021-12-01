import {useState} from 'react';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Piero Sabino',
    },
    {
      id: 2,
      name: 'Edmondo di Ronza',
    },
    {
      id: 3,
      name: 'Giorgio Coppola',
    },
    {
      id: 4,
      name: 'Francesco Rua',
    }
    ]);

  //Function add Member
  const addMember = (e) => {
    e.preventDefault();
    const newMember = {
      name: e.target.name.value,
    };
    setMembers([...members, newMember]);
    e.target.name.value = '';
  };

  //Function delete Members array
  const handleReset = () => {
    setMembers([]);
  };

 
  return (
    <div  style={{margin:'0 30%',}}>
      <h1>Team</h1>
      <form onSubmit={addMember} >
        <input type="text" name="name" placeholder="Add Member..." required />
        <button style={{cursor: 'pointer',outline: 'none'}}>Add</button>
      </form>
      <h2>Team Leader</h2> 
        {/* Show the team leader */}
        <h3 className="teamLeader">{members.length > 0 ? members[0].name : 'No Team Leader'}</h3>
      <h2>Team Members</h2>
      <ul>
       {/* Create a paragraph if the array is empty  */}
        {members.length === 0 ? <p style={{color:'red',fontSize:'30px'}}>No members</p> : members.map((member, index) => (
          <li key={index} style={{fontSize:'1.5rem',listStyle:'none'}}>{member.name} 
              {/* Create a button to delete a member */}
              <button onClick={() => setMembers(members.filter((m, i) => i !== index))} className="btn_delete">
                   <i className="far fa-trash-alt" ></i>
              </button>
              {/* * Create a button to make the member the team leader and then it results in TeamLeader*/}
              <button onClick={() => setMembers([member, ...members.filter((m, i) => i !== index)])} className="btn_leader"><i className="fas fa-user-tie"></i></button>
          </li>
        ))}
      </ul>
      {/* Cancel the array with the reset button */}
      <button onClick={handleReset} style={{margin:15,cursor: 'pointer',outline: 'none'}}>Delete Members</button>
    </div> 
  );
}

export default App;
