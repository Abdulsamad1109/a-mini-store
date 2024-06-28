import React, { useContext } from 'react'
import { goodsContext } from './App'

const AddGoods = () => {
  let {goods,setGoods,goodsName,setGoodsName,goodsQuantity,setGoodsQuantity,goodsPrice,setGoodsPrice,goodsDescp,setGoodsDescp} = useContext(goodsContext)
    const addgoods =()=>{
        let allInps = {   
            goodsName,
            goodsQuantity,
            goodsPrice,
            goodsDescp
        }
        let allGoods = [...goods, allInps]
        setGoods(allGoods)
        setGoodsName("")
        setGoodsQuantity("")
        setGoodsPrice("")
        setGoodsDescp("")
        alert("Goods added succesfully")
    }

  return (
    <div>     
        <input value={goodsName} placeholder='name of goods' onInput={(e)=>setGoodsName(e.target.value)} />
        <input value={goodsQuantity} placeholder='quantity of goods' onInput={(e)=>setGoodsQuantity(e.target.value)}/>
        <input value={goodsPrice} placeholder='price of goods' onInput={(e)=>setGoodsPrice(e.target.value)}/>
        <textarea value={goodsDescp} placeholder='description of goods' onInput={(e)=>setGoodsDescp(e.target.value)}/>
        <button onClick={addgoods}>Add Goods</button>

    </div>
  )
}

export default AddGoods
