import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NewNavbar from "./components/NewNavbar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <NewNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
