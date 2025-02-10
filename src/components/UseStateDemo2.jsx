import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isloading,setIsLoading]=useState(true)
    const stoploading=()=>{
        setIsLoading(false)
    }
    
  return (
    <div style={{textAlign:'center'}}> 
       <h1>UseStateDemo2</h1> 
        <h1>{
            isloading == true ? 'Loading...' :''           
            
            }</h1>
        <button onClick={()=>{stoploading()}}>STOP</button>
        
        
        
        </div>

    
  )
}
