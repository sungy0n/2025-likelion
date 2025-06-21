import React from 'react'
import search from '../../assets/img/Nav/Search.png'
import Vector from '../../assets/img/Search/Vector (8).png'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div id="Search_wrap">
        <div className="search_bar">
            <div className="left">
                <img src={search} alt="" />
                <input type="search" placeholder='Search items' name="" id="" />
            </div>
            <div className="right">
                <Link to='/'>
                    <img src={Vector} alt="" />
                </Link>
            </div>
        </div>
        <div className="search_items">
            <p>Popular search terms</p>
            <div className="items">
                <div className="item">Trend</div>
                <div className="item">Dress</div>
                <div className="item">Bag</div>
                <div className="item">Tshirt</div>
                <div className="item">Beauty</div>
                <div className="item">Accessories</div>
            </div>
        </div>
    </div>
  )
}

export default Search