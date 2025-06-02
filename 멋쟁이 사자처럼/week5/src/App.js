import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Button from './component/Button'
import Write from './component/Write'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Button/>}/>
        <Route path='/write' element={<Write/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App