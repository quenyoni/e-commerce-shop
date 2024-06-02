import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Homepage from './pages/Homepage.jsx'
import Categories from './pages/Categories.jsx'
import Header from "./components/Header.jsx";
import Sale from "./components/Sale.jsx";
import NotFound from "./components/NotFound.jsx";
function App() {
 const [loggedIn,setLoggedIn] = useState(!false)
  return (
    <main>
      {/* 
			 */}
      <Router>
      <Sale />
       <Header loggedIn={loggedIn} />
        <Routes>
          
     
        <Route path="/login" element={ <Login />} />
        <Route path="/" element={ <Homepage />} />
        <Route path="/categories" element={ <Categories />} />
        <Route path="*" element={ <NotFound />} />
         
          </Routes>
      </Router>
 
  </main>
  )
}

export default App
