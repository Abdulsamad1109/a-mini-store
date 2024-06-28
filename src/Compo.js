import React, { useState } from 'react'

const Compo = () => {
  let [value, setValue] = useState(0)

  const plus =adds=>{
    setValue(value += adds)
  }
  const minus =()=>{ 
    setValue(value - 10)
  }

  return (
    <div>
        <div>{value} {value < 50 ? "SMALL":"BIG"}</div>
      <button onClick={()=>{plus(+5)}}>Add 5</button>
      <button onClick={()=>{plus(+10)}}>Add 10</butt
      <button onClick={minus}>subtract 10</button>
    </div>
  )
}

export default Compo
