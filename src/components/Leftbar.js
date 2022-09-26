import React from 'react'
import styles from './Leftbar.module.css'
import LinkedIn from '../icons/linkedin.png'
import GitHub from '../icons/github.png'
import Instagram from '../icons/instagram.png'

export const Leftbar = () => {
  return (
    <div className={styles.left_sidebar}>
        <div className={styles.info_container}>

            <a href='https://github.com/aremuolayinka02' target="_blank">
                <img 
                src={GitHub}
                width = '40px'
                />
            </a>

        <a href='https://www.instagram.com/olayinka.dev/' target="_blank">
           <img 
            src={Instagram}
            width = '35px'
            />
        </a>

        <a href='https://www.linkedin.com/in/olayinka-aremu-1074481aa/' target="_blank">
           <img 
            src={LinkedIn}
            width = '40px'
            />
        </a> 

           <div className={styles.vertical_line}></div>
        </div>
    </div>
  )
}

export default Leftbar
