import React from 'react'

export const ArrayDemo1 = () => {
    var users = ["KBZ","MJ","DP","BP"]
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'blue'}}>Array Demo 1</h1>

        {
         users.map((user)=>{


            return <li>{user}</li>
         }
        
        
        
        
        )

        }
    </div>
  )
}
