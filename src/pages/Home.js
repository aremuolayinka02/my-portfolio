import React from 'react'
import Introduction from '../components/Introduction'
import { motion, AnimatePresence } from 'framer-motion'

export const Home = () => {
  return (
    <AnimatePresence>
      <motion.div exit={{opacity: 0}}>

        <Introduction />

      </motion.div>
    </AnimatePresence>
  )
}

export default Home
