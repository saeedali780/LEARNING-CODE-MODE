const User = ({ name = "Anonymous", age }) => {
  return (
    <div>
        
        <h1>{name}</h1>
        <p>Age: {age}</p>
    </div>
  )
}

export default User