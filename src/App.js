import React from 'react'
import Companies from './Pages/Companies'
import Bonds from './Pages/Bonds'
import Partners from './Pages/Partners'
import Aboutus from './Pages/Aboutus'
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes path={'/'} location={location} keyy={location.pathname} >
        <Route path="/" exact element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/bonds" element={<Bonds />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>

    </AnimatePresence>
  )
}

export default App