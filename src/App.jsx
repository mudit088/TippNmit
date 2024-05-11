import './App.css'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  

  return (
  <div>
    <Router>
    <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/signup" element={<SignUp/>} />

          <Route exact path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </Router>
  </div>
  )
}

export default App
