import {useState} from 'react'
import User from './components/User.jsx'

const App = () => {
  let [display, setDisplay] = useState(false);
  return (
    <>
    <h1>Toggle in ReactJs</h1>
    <button onClick={() => setDisplay(!display)}>Toggle</button>
    {
      // display ?  <h1>Saeed Ali</h1> :null

      display ?  <User/> :null
    }
  
    </>
  )
}

export default App