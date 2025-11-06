import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Router } from 'react-router-dom'
import Nav from './component/Section/Nav'
import Main from './component/Main'
import Blog from './component/Main_Section/Blog'
import Menu from './component/Main_Section/Menu'
import Footer from './component/Section/Footer'
import Apparel from './component/Main_Section/Apparel'
import Product from './component/Main_Section/Product'
import Checkout from './component/Main_Section/Checkout'
import Search from './component/Main_Section/Search'
import Contact from './component/Main_Section/Contact'
import About from './component/Main_Section/About'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location=useLocation();

  const hideAllLayoutRoutes=['/menu','/search']
  const isHideAllLayout = hideAllLayoutRoutes.includes(location.pathname);

  const hideFooterRoutes = ['/checkout', '/about'];
  const isHideFooter = isHideAllLayout || hideFooterRoutes.includes(location.pathname);

  return (
    <div className='wrap'>
      {!isHideAllLayout&&<Nav/>}
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/blog' element={<Blog />}/> 
          <Route path='/apparel' element={<Apparel/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      {!isHideFooter&&<Footer/>}
    </div>
  )
}

export default App