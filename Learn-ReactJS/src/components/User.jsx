
const User = ({ user }) => {
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px', width: '400px', borderRadius: '10px'}}>
      <h3>Name: <span style={{color: "green"}}>{user.name}</span> </h3>
      <h3>Age: <span style={{color: "blue"}}>{user.age}</span></h3>
      <h3>Email: <span style={{color: "blue"}}>{user.email}</span></h3>
    </div>
  )
}

export default User