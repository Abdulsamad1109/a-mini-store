import React, { useContext, useState } from 'react'
import { goodsContext } from './App'

const EditOwner = () => {
  let {owner, setOwner} = useContext(goodsContext)
  let [update, setupdate] = useState("")
  const updateOwner =()=>{
    setOwner(update)
  }
  return (
    <div>
      <input value={update} onInput={(e)=>setupdate(e.target.value)} />
      <button onClick={updateOwner}>Update Owner</button>
    </div>
  )
}

export default EditOwner
