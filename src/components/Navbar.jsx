import React from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"
function Navbar({basket,dispatch}) {
  return (
   <>
   <div className="nav">
   <NavLink end to="/">Home</NavLink>
   <NavLink end to="/basket">Basket({basket.length?basket.length:null})</NavLink>
   </div>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Navbar)