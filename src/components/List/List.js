import "./List.css";

const List = ({ members, setTeamLeader, setMembers }) => {
  return (
    <ul>
      {/* Members list */}
      {/* Create a paragraph if the array is empty  */}
      {members.length === 0 ? (
        <p style={{ color: "red", fontSize: "30px" }}>No members</p>
      ) : (
        members.map((member, index) => (
          <li key={index} style={{ fontSize: "1.5rem", listStyle: "none" }}>
            {member.name}
            {/* Create a button to delete a member */}
            <button
              onClick={() => setMembers(members.filter((m, i) => i !== index))}
              className="btn_delete"
            >
              <i className="far fa-trash-alt"></i>
            </button>
            {/* * Create a button to make the member the team leader and then it results in TeamLeader*/}
            <button
              onClick={() => setTeamLeader(member)}
              className="btn_leader"
            >
              <i className="fas fa-user-tie"></i>
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default List;
