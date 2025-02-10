import React from 'react'
import { useState } from 'react'

export const UseStateDemo1 = () => {

   const [count,setCount] = useState(0)    

   const increment =()=>{
         setCount(count+1)

   }
  return (
    <div style={{textAlign:"center"}}>
      <h1> UseStateDemo2</h1> 
<h1>COUNT ={count}</h1>
    <button onClick={()=>{increment()}}>INCREMENT</button>

        </div>
  )
}
