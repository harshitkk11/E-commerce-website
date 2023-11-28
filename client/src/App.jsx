import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Signup from "./components/Signup"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    
    </>
  )
}

export default App
