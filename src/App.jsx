import './App.css'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Client from './Components/Client'
// import ('dotenv').config();

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // console.log(process.env.REACT_APP_SERVERURL)

  return (
  <div>
    <Router>
    <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/signup" element={<SignUp/>} />

          <Route exact path="/dashboard" element={<Dashboard/>} />

          <Route exact path="/login" element={<Login/>} />

          <Route exact path="/client/:username" element={<Client/>} />

        </Routes>
      </Router>
  </div>
  )
}

export default App
