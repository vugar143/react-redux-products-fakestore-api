import React from 'react'
import {connect} from "react-redux"
function Product({item,basket,dispatch}) {
  console.log(basket)
  const check=basket.find((a)=>a.id===item.id)
  const handleClick=()=>{
    if(check){
     let t= basket.filter((a)=>!a.id==item.id)
     dispatch({
      type:"SET_BASKET",
      payload:t
     })
     return
    }
    dispatch({
      type:"SET_BASKET",
      payload:[...basket,{id:item.id,
      count:1
      }]
     })
  }
  return (
    <>
    <div className="hero">
    <img src={item.image} alt="" />
    <h1>{item.title.slice(0,5)}...</h1>
    <h2>${item.price}</h2>
    <button onClick={handleClick}>{check?"Remove from basket":"Add to basket"}</button>
    </div>
    </>
  )
}
const t=(a)=>a
export default connect(t) (Product)