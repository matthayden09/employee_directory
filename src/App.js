import { useState, useEffect } from 'react'
import axios from 'axios'
import Employee from './components/Employee'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [user, setUser] = useState({})

  useEffect(() => fetchUser(), [])

  const fetchUser = async () => {
    try {
      const { data } = await axios(`https://randomuser.me/api/?results=20`)
      setUser(data)
      console.log(data)
    } catch (err) {
      alert('user not found')
    }
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}

        <Employee {...user} />

      {/* </header> */}
    </div>
  );
}

export default App;
