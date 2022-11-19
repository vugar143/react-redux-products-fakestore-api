import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import {connect} from "react-redux"
import Home from './pages/Home'
import Basket from './pages/Basket'
import Navbar from './components/Navbar'
import {useEffect} from "react"
function App({dispatch}) {

useEffect(()=>{
fetch("https://fakestoreapi.com/products/")
.then((a)=>a.json())
.then((a)=>{
   dispatch({
    type: "SET_PRODUCTS",
    payload:a,
   })
})
},[])

  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/basket" element={<Basket/>} />
  </Routes>
  </>
  )
}

export default connect() (App)
