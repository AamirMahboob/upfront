import React from 'react'
 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

 const Bonds = () => {
  return(
    <>
       <Navbar />
       <motion.div
             initial={{opacity:0}}
             animate={{opacity: 1}}
             exit={{opacity:0}}
             
            >
       <div>
           coming soon
       </div>
       <Footer />
       </motion.div>
       </>
  )
}
export default Bonds