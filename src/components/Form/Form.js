
const Form = ({addMember}) => {

return (
<form onSubmit={addMember}>
        <input type="text" name="name" placeholder="Add Member..." required />
        <button style={{ cursor: "pointer", outline: "none" }}>Add</button>
      </form>
)
}

export default Form;