import React from 'react'
import '../assets/content.css'

export const Content  = () => {
  var name = "Kartik"
  var age ="21"
  var isActive = false;
  return (
    <div class = "content" >
        <h1>Name:{name}</h1>
        <h2>Age:{age}</h2>
        <h3>Active = {isActive == true ? "Active" : "Not Active"}</h3>
        </div>
  )
}
