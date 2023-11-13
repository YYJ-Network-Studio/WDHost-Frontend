import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Index from './Index';
import Game from './Game';
import Foreign from './Foreign';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='game' element={<Game />} />
        <Route path='foreign' element={<Foreign />} />
      </Routes>
    </>
  );
}

export default App;