import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Main1 from './components/Main1'
import Main2 from './components/Main2'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main1/>}/>
      <Route path='/main2' element={<Main2/>}/>
    </Routes>
  )
}

export default App