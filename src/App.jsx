import Categories from "./components/Categories"
import Navbar from "./components/Navbar"  
import "./components/Categories"
import { Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/login";
import User from "./components/user";
import Admin from "./components/admin";

function App() {
  

  return (
    <>
    <Navbar/>
<Routes>
   <Route path="/" element={<Home />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/user" element={<User />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/register" element={<h1 className="text-4xl font-bold text-center mt-20">reister page</h1>} />
  <Route path="*" element={<h1 className="text-4xl font-bold text-center mt-20">404 not found</h1>} />

</Routes>
    
    
  
    
      
    </>
  )
}

export default App
