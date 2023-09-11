import React from 'react';
import Create from './component/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './component/Read';
import Update from './component/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/update' element={<Update/>} ></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;