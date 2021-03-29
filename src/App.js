import { useState } from 'react'
import Avatar from './components/Avatar'
import Details from './components/Details'
import Search from './components/Search'
import './App.css';

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Avatar />
        <Details />
      </header>
    </div>
  );
}

export default App;
