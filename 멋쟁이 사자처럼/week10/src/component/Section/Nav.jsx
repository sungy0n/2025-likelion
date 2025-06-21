import React from 'react'
import Menu from '../../assets/img/Nav/Menu (1).png'
import Logo from '../../assets/img/Nav/Logo.png'
import Search from '../../assets/img/Nav/Search.png'
import Shop from '../../assets/img/Nav/shopping bag.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div id="Nav_wrap" className='container'>
        <div className="nav">
          <Link to='/menu'>
            <img src={Menu} alt="" />
          </Link>
            <Link to='/'>
              <img src={Logo} alt="" className="logo" />
            </Link>
            <div className="right">
                <Link to='/search'>
                    <img src={Search} alt="" />
                </Link>
                <img src={Shop} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav