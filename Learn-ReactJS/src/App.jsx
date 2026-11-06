import {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
     {
      count=== 0 
      ? <h1>Count is Zero</h1>
      :count===1 ? <h1>Count is One</h1> 
      :count===2 ? <h1>Count is Two</h1>
      : <h1>Count is {count}</h1>
     }
    </div>
  )
}

export default App