import { useState } from 'react'
import Avatar from './components/Avatar'
import Details from './components/Details'
import Search from './components/Search'
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('matthayden09')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(username)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Search
          username={username} setUsername={setUsername}
          handleSubmit={handleSubmit} />
        <Avatar />
        <Details />
      </header>
    </div>
  );
}

export default App;
