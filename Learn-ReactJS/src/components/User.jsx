import { useState } from 'react';

const User = () => {
  let [name, setName] = useState("Saeed");
  let [age, setAge] = useState(18);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    }
  }
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" value={name} id="name" name="name" onChange={handleInputChange} />
      <h1>{name}</h1>
      <br /><br /><br />
      <label htmlFor="age">Age:</label>
      <input type="number" value={age} id="age" name="age" onChange={handleInputChange} />
       <h1>{age}</h1>

       <button onClick={() => { setName(""); setAge(0); }}>Reset</button>
    </div>
  )
}

export default User