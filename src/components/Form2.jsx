import React, { useState } from 'react'

export const Form2 = () => {
    const [agentname, setagentname] = useState('')
    const [agentrole, setagentrole] = useState('')
    const [agentult, setagentult] = useState('')
    const [agentgender, setagentgender] = useState('')
    const [agentrank, setagentrank] = useState('')

  return (
    <div style={{textAlign:'center'}}>
        <h1>FORM 2</h1>
        <div>
            <label>AGENTNAME</label>
        <input type='text' placeholder='Enter Name' onChange={(event)=>setagentname(event.target.value)}></input>
         {agentname}</div>
         <div>
         <label>AGENTROLE</label>
         <input type='text' placeholder='Enter Role' onChange={(event)=>setagentrole(event.target.value)}></input>
         {agentrole}</div>
         <div>
         <label>AGENTULT</label>
         <input type='text' placeholder='Enter Ult Name' onChange={(event)=>setagentult(event.target.value)}></input>
         {agentult}</div>
         <div>
         <label>AGENT GENDER</label>
         <input type='text' placeholder='Enter Gender' onChange={(event)=>setagentgender(event.target.value)}></input>
         {agentgender}</div>
         <div>
         <label>AGENTRANK</label>
         <input type='text' placeholder='Enter Rank' onChange={(event)=>setagentrank(event.target.value)}></input>
         {agentrank}</div>
        









    </div>
  )
}
