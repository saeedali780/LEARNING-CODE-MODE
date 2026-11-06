import {useState} from 'react'

const App = () => {
  let [display, setDisplay] = useState(false);
  return (
    <>
    <h1>Toggle in ReactJs</h1>
    <button onClick={() => setDisplay(!display)}>Toggle</button>
    {
      display ?  <h1>Saeed Ali</h1> :null
    }
  
    </>
  )
}

export default App