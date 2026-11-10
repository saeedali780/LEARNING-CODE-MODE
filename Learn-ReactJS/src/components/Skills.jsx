import { useState } from 'react'

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };
  return (
    <div>
        <h3>Select your skills</h3>
        <input type="checkbox" id="html" name="html" value="HTML" onChange={handleCheckboxChange} />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="checkbox" id="css" name="css" value="CSS" onChange={handleCheckboxChange} />
        <label htmlFor="css">CSS</label>
        <br />
        <input type="checkbox" id="js" name="js" value="JavaScript" onChange={handleCheckboxChange} />
        <label htmlFor="js">JavaScript</label>
        <br />

        <h2>Selected Skills: {skills.join(', ')}</h2>
    </div>
  )
}

export default Skills