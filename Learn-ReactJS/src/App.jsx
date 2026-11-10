import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Name: ${name}, Password: ${password}, Email: ${email}`)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <br/><br/>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/><br/>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/><br/>
        <button type='submit'>Submit</button>
        <button type='reset' onClick={() => { setName(''); setPassword(''); setEmail('') }}>Reset</button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
      </form>
    </div>
  )
}

export default App