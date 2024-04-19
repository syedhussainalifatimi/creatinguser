import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import SignUp from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';
import Hotproducts from './components/Hotproducts/Hotproducts';
import Products from './components/Products/Products';




export default function App() {
  
  return (
   <div>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/hotproducts" element={<Hotproducts/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  )
}
