import React from 'react'
import {connect} from "react-redux"
import BasketItem from '../components/BasketItem'
import {useNavigate} from "react-router-dom"
function Basket({products,basket}) {
  let nav=useNavigate()
  let total=basket.reduce((acc,item)=>acc+products.find((a)=>a.id===item.id)?.price*item.count,0)
  return (
   <>
   {!basket.length&& nav("/")}
     {total?<h1>${(total).toFixed(2)}</h1>:null}
   {products.length?basket.map((a)=>
    <BasketItem item={a} key={a.id}/>
   ):<h1>Loading...</h1>
  }
   
   </>
  )
}
const t=(a)=>a
export default connect(t) (Basket)