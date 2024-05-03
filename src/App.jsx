import './App.css'
import Employee from './Components/Employee'
import Home from './Components/Home'
import Manager from './Components/Manager'
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

          <Route exact path="/signup" element={<Manager/>} />

          <Route exact path="/dashboard" element={<Employee/>} />

        </Routes>
      </Router>
  </div>
  )
}

export default App
