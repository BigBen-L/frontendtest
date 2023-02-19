import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { req } from './api/util';

function App() {
  const [apiState, setApiState] = useState(false)
  const [serverRes, setServerRes] = useState()
  const handleOnclick = async () => {
    try {
      const response = await req({
        method: 'GET'
      })
      setApiState(true)
      setServerRes("Server is now connected, and the response is ".concat(response))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleOnclick}>
          test api
        </button>
        <a>
          {apiState ? serverRes : "Test here"}
        </a>
      </header>
    </div>
  );
}

export default App;
