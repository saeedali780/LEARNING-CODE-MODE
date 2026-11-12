// import Skills from './components/Skills'
const App = () => {
  const users = [
    {id: 1, name: 'John', age: 30},
    {id: 2, name: 'Jane', age: 25},
    {id: 3, name: 'Bob', age: 35},
  ]
  return (
    <div>
      <h1>Loops in ReactJS</h1>
      {users.map(user => (
        <div key={user.id}>
          {user.age > 30 ? (
            <h2>{user.id + '. ' + user.name} is older than 30</h2>
          ) : (
            <h2>{user.id + '. ' + user.name} is younger than or equal to 30</h2>
          )}
     
        </div>
      ))}
      {/* <Skills /> */}
    </div>
  )
}

export default App