import React from 'react'
import {connect} from "react-redux"
import{useNavigate} from "react"
function BasketItem({products,item,basket,dispatch}) {
    
    let product=products.find((a)=>a.id===item.id)
    const increase=()=>{
        item.count++
        dispatch({
            type:"SET_BASKET",
            payload:[...basket]
        })
    }
    const decrease=()=>{
        item.count--
        if(item.count===0){
           let f= basket.filter((a)=>a.id!==item.id)
           dispatch({
            type:"SET_BASKET",
            payload:[...f]
        })
        return
        }
        dispatch({
            type:"SET_BASKET",
            payload:[...basket]
        })

       
    }
   

  return (
    
    <>
  
    <section>
    <div className="basket-container">
        <div className="basket-info">
      <img src={product.image} alt="" />
      <h1>{product.title.slice(0,7)}...</h1>
      </div>
      <div className="operations">
      <button onClick={increase} className='inc-btn'>+</button>
      <p>{item.count}</p>
      <button onClick={decrease}  className='dec-btn'>-</button>
      </div>
      <h1>Total:${(product.price*item.count).toFixed(2)}.</h1>
    </div>
    </section>
    </>
  )
}
const t=(a)=>a
export default connect(t) (BasketItem)