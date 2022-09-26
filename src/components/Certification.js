import React, { useRef } from 'react'
import styles from './Certification.module.css'
import { motion } from 'framer-motion'

export const Certification = ( {skill, company, status, duties, link, certificate} ) => {

    const slideInFromLeft = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                // delay: 0.8,
                duration: 2.4
            }
        }
    }


  return (
    <motion.div
    variants={slideInFromLeft}
    initial="hidden"
    whileInView="visible" 
    viewport={{ once: false }}
    className={styles.work_container}
    >

        <div className={styles.work_header}>
            <p> {skill} </p>

            <span> @ </span>

            <a href={link} target="_blank">
                <span className={styles.work_link}> {company} </span>
            </a>

        </div>

        <div className={styles.work_period}>
            <p> {status}  - <a href={certificate} target="_blank">VIEW CERTIFICATE</a></p> 
        </div>

        <div className={styles.work_performed}>

            {
                duties.map((duty, key) => 
                    <ol  key={key}>
                        <li>{duty}</li>
                    </ol>
                )
            }
            
        </div>
        
    </motion.div>

  )
}

export default Certification
