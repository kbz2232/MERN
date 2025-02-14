import React from 'react'
import '../assets/nav.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">Form Demo 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">Form Demo 2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">Form Demo 3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">Form Demo 4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo5">Form Demo 5</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo6">Form Demo 6</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo7">Form Demo 7</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo8">Form Demo 8</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/validationform1">Validation Form 1</Link>
      </li>
      
    </ul>
  </div>
</nav>


    
    
  )
}
