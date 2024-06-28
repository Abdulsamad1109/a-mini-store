import React, { useContext } from 'react'
import { goodsContext } from './App'

const GoodsInfo = ()=>{
    let {details} = useContext(goodsContext)
  return (
    <div>
           {details.map((detail,i)=>(
            <div key={i}>
              <h1>Product name: {detail.goodsName}</h1>
              <h4>Price: <b>$</b>{detail.goodsPrice}</h4>
              <h4>Quantity: {detail.goodsQuantity}</h4>
              <article>Decreption: {detail.goodsDescp}</article>
              </div>
           ))}
    </div>
  )
}

export default GoodsInfo
