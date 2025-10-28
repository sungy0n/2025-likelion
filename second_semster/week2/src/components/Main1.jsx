import React from 'react'
import { Link } from 'react-router-dom'

const Main1 = () => {
  return (
    <div id="Main1"> 
      <div className='play'>
          <Link to='/main2'>
              <p>PLAY</p>
          </Link> 
      </div>
      <text>
        Rock Paper Scissors 
        <br/> with Compose
      </text>
    </div>
  )
}

export default Main1