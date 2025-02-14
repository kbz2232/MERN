import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {
  return (
    <div style={{ textAlign: 'center', color: 'yellow', height: 500, backgroundColor: 'brown' }}>
      <h1>Movies....</h1>
      <li>
        <Link to="/play/marvel">MARVEL</Link>
      </li>
      <li>
        <Link to="/play/Valorant">VALORANT</Link>
      </li>
      <li>
        <Link to="/play/123">GOAT HI KEHDE</Link>
      </li>




    </div>
  )
}
