import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./components/login"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    </>
  )
}

export default App
