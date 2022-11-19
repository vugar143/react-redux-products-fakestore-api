import React from 'react'
import {connect} from "react-redux"
import Product from '../components/Product' 
function Home({products,dispatch}) {
    console.log(products)
  return (
    <>
    <div className="king">
{products.map((a)=>(
    <Product item={a} key={a.id}/>
))}
</div>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Home)