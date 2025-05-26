import React from 'react'
import Nav from './components/navbar/navbar'
import Admin from './pages/admin/Admin'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Nav />
      <Admin />
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
