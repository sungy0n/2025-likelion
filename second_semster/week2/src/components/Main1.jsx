import React from 'react'
import { Link } from 'react-router-dom'

const Main1 = () => {
  return (
    <div id="Main1"> 
      <Link to='/main2'>
        <div className="play">
          <p>PLAY</p>
        </div>
      </Link> 
      <text>
        Rock Paper Scissors 
        <br/> with Compose
      </text>
    </div>
  )
}

export default Main1