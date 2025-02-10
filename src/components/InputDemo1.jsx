import React, { useState } from 'react'


export const InputDemo1 = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')



  return (
    <div style={{textAlign:'center'}}>
        <h1>INPUT DEMO 1</h1>
        <label>NAME</label>
        <input type="text" placeholder='Enter Name' onChange={(event)=>setname(event.target.value)} ></input>
        <h2>{name}</h2>
        <label>EMAIL</label>
        <input type='text' placeholder='Enter Email' onChange={(event)=>setemail(event.target.value)}></input>
        <h2>{email}</h2>
    
    </div>
  )
}
