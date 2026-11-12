import User from './components/User.jsx'
const App = () => {
  const users = [
    {id: 1, name: 'John', age: 30 , email: 'john@example.com'},
    {id: 2, name: 'Jane', age: 25, email: 'jane@example.com'},
    {id: 3, name: 'Bob', age: 35, email: 'bob@example.com'},
  ]
  return (
    <div>
      <h1>User List</h1>

      {users.map(user => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  )
}

export default App