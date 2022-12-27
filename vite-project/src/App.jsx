import reactLogo from '/assets/react.svg'
import reduxLogo from '/assets/redux.svg'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import User from './components/User'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="react logo" alt="React logo" />
        </a>
        <a href="https://react-redux.js.org" target="_blank">
          <img src={reduxLogo} className="redux logo" alt="Redux logo" />
        </a>
      </div>
      <h1>React + Redux</h1>
      <br />
      <Login/>
      <br />
      <User/>
      <br />
      <Logout/>
      <br />
      <p className="read-the-docs">
        Testando Redux com React
      </p>
    </div>
  )
}

export default App
