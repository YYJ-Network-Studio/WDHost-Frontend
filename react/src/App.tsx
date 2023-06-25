import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Index from './Index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  );
}

export default App;