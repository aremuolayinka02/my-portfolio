import React from 'react'
import styles from './Introduction.module.css'
import ContentImage from '../images/software.svg'
import { ConnectIcons } from './ConnectIcons'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'

export const Introduction = () => {

  const introVariants = {
    hidden: {
      y: "-100vw",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: "30"
      }

    }
  }

  const nameVariants = {
    shakingAnim: {
      scale: [0.90, 1],
      ease: "easeInOut",
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: "1.8"

      }

    }
  }

  return (

        <motion.div 
          variants={introVariants}
          initial="hidden"
          animate="visible"
          className={styles.intro}
        >
            <div className={styles.intro_content}>

                <div>

                    <p>Hi there,</p>
                    <motion.h1
                      variants={nameVariants}
                      animate="shakingAnim"
                    >I'm Olayinka
                    </motion.h1>

                    <p className={styles.short_info}>
                    Experienced software developer with a love for creating cutting-edge applications 
                    that boost organizational efficacy for success and efficiency. 
                    I have a strong passion for technology, art, and politics 🙃.  
                    I love things simple and organized.
                    </p>

                    <a href="/my-portfolio/aremu_olayinka.pdf" target="_blank">
                      <button className={styles.main_btn}>
                        Resume
                      </button>
                    </a>

                    <NavLink to="/contact">
                      <button className={styles.main_btn}>
                        Hire Me
                      </button>
                    </NavLink>

                </div>

                <img src={ContentImage} className={styles.intro_image} />


            </div>
            <ConnectIcons />
        </motion.div>
  )
}

export default Introduction
