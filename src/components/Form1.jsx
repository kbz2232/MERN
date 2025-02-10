import React, { useState } from 'react'

export const Form1 = () => {
    const [name, setname] = useState('')
    const [mail, setmail] = useState('')
    const [contactnumber, setcotactnumber] = useState('')
    const [age, setage] = useState('')
    const [gender, setgender] = useState('')

  return (
    <div style={{textAlign:'center'}}>
        <h1>FORM 1</h1>
        <div>
            <label>NAME</label>
        <input type='text' placeholder='Enter Name' onChange={(event)=>setname(event.target.value)}></input>
         {name}</div>
         <div>
         <label>EMAIL</label>
         <input type='text' placeholder='Enter Email' onChange={(event)=>setmail(event.target.value)}></input>
         {mail}</div>
         <div>
         <label>CONTACTNUMBER</label>
         <input type='tel' placeholder='Enter Contact Number' onChange={(event)=>setcontactnumber(event.target.value)}></input>
         {contactnumber}</div>
         <div>
         <label>AGE</label>
         <input type='number' placeholder='Enter Age' onChange={(event)=>setage(event.target.value)}></input>
         {age}</div>
         <div>
         <label>GENDER</label>
         <input type='text' placeholder='Enter Gender' onChange={(event)=>setgender(event.target.value)}></input>
         {gender}</div>
        









    </div>
  )
}
