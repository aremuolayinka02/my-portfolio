import React from 'react'
import styles from './Rightbar.module.css'
import Gmail from '../icons/gmail.png'
import { motion } from 'framer-motion'

export const Rightbar = () => {

  const jumpUpVariants = {
    hidden: {
      y: "-10"
    },
    visible: {
      y: 0,
      transition: {
        yoyo: Infinity
      }
    }
  }
  return (
    <div className={styles.right_sidebar}>
        <div className={styles.info_container_right}>

            <motion.a 
              variants={jumpUpVariants}
              initial="hidden"
              animate="visible"
              href='mailto:aremuolayinka02@gmail.com?Subject=Hello%20Olayinka' target="_blank"
            >
                <img 
                src={Gmail}
                width = '40px'
                />
            </motion.a>

           <div className={styles.vertical_line1}></div>
        </div>
    </div>
  )
}

export default Rightbar
