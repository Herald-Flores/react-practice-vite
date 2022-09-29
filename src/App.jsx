import { useState } from 'react';
import reactLogo from './assets/react.svg';
import List from './components/List';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + React</h1>

      <List />
    </div>
  );
}

export default App;
