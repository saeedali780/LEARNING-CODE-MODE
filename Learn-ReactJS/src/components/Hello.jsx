import { useState } from 'react';
const Hello = () => {
    let [count, setCount] = useState(0);
  return (

    <div>
        <h1>Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  )
}

export default Hello