// import Hello from './components/Hello'
import {useState} from 'react';
const App = () => {

  let [fruit, setFruit] = useState("Apple");
  const handleClick = (e) => {
    e.preventDefault();
    setFruit("Banana");
  }
  return (
    <div>
      <h1>My Favorite Fruit is {fruit}</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* <Hello /> */}
    </div>
  )
}

export default App