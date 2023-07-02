import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
