import React, { useContext, useState } from 'react'
import { goodsContext } from './App';
import { Link } from 'react-router-dom';

const DisplayGoods = () => {
  const {goods,setGoods,setDetails} = useContext(goodsContext);
  const delBtn=(i)=>{
    let a =  goods.filter((_,index)=> i !== index)
    setGoods(a)
  }

  const viewBtn = (i)=>{
    let b = goods.filter((_,index)=> i == index )
    setDetails(b)
  }
  return (
    <div>
      {goods.length?
      <table border="1">
        <thead>
          <tr>
            <th>S/N</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>INFO</th>
          </tr>
        </thead>
          <tbody>
           {goods.map((good,i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{good.goodsName}</td>
              <td>{good.goodsPrice}</td>
              <td><button onClick={()=>viewBtn(i)}><Link to='/goodsinfo'>View details</Link></button></td>
              <td><button onClick={()=>delBtn(i)}>Delete</button></td>
            </tr>
           ))}
          </tbody>
      </table>
      :<div>No goods added!</div>}
    </div>
  )
}

export default DisplayGoods
