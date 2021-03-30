import { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from './components/Avatar'
import Details from './components/Details'
import Search from './components/Search'
import Grid from './components/Grid'
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('matthayden09')

  useEffect(() => fetchUser(), [])

  const fetchUser = async () => {
    try {
      const { data } = await axios(`https://api.github.com/users/${username}`)
      setUser(data)
      console.log(data)
    } catch (err) {
      alert('user not found')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setUsername(username)
    fetchUser()
  }


  return (
    <div className="App">
      <header className="App-header">
        <Search
          username={username} setUsername={setUsername}
          handleSubmit={handleSubmit} />
        <Grid>
          <Avatar {...user} />
          <Details {...user} />
        </Grid>
      </header>
    </div>
  );
}

export default App;
