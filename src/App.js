import React from 'react'
import Companies from './Pages/Companies'
import Bonds from './Pages/Bonds'
import Partners from './Pages/Partners'
import Aboutus from './Pages/Aboutus'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes path={'/'}>
  <Route path="/" exact element={ <Home />} />
  <Route path="/companies" element={<Companies />} />
  <Route path="/bonds" element={<Bonds />} />
  <Route path="/partners" element={<Partners />} />
  <Route path="/aboutus" element={<Aboutus />} />
</Routes>
    
    </>
  )
}

export default App