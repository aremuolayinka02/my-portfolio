import React from 'react'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div>
        <Link to={'/'} className={styles.link_name}>

            <p className={styles.symbol_text}>
                {"< "}
                    <span className={styles.developer_name}>
                        Olayinka.Dev
                    </span>
                {" />"}
            </p>


        </Link>
    </div>
  )
}

export default Logo
