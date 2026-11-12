import {useState} from 'react'
const Skills = () => {
  const [gender, setGender] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleChange = (e) => {
    setGender(e.target.value);
  }
  return (

    <div>
      <h2> Drop down and radio</h2>
      <br/>
      <h3>Handle Radio Buttons</h3>

      <input type="radio" name="gender" value="Male" id="male" checked={gender === 'Male'} onChange={handleChange} />
      <label htmlFor="male">Male</label>

      <input type="radio" name="gender" value="Female" id="female" checked={gender === 'Female'} onChange={handleChange} />
      <label htmlFor="female">Female</label>
      <br/><br/>

      <h1>{gender || 'No gender selected'}</h1>

      <br/>
      <h3>Handle Drop Down</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Skill</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>
      <h1>{selectedOption || 'No skill selected'}</h1>
    </div>
  )
}

export default Skills