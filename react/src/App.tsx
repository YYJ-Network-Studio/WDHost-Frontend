import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Index from './Index';
import Game from './Game';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='game' element={<Game />} />
      </Routes>
    </>
  );
}

export default App;