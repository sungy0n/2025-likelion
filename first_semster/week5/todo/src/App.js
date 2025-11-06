import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


