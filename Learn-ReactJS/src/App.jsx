// import User from './components/User';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <div>
      {/* <User name="John" age={30} /> */}

      <Wrapper color="blue">
          <h1 style={{textAlign: "center"}}>Wrapper Component</h1>
      </Wrapper>

       <Wrapper color="red">
          <h1 style={{textAlign: "center"}}>Hello Saeed</h1>
      </Wrapper>

       <Wrapper>
          <h1 style={{textAlign: "center"}}>Another Wrapper</h1>
      </Wrapper>
    </div>
  )
}

export default App