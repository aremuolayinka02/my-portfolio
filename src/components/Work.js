import React from 'react'
import styles from './Work.module.css'

export const Work = ( {position, company, duration, duties, link} ) => {
  return (
    <div className={styles.work_container}>

        <div className={styles.work_header}>
            <p> {position} </p>

            <span> @ </span>

            <a href={link} target="_blank">
                <span className={styles.work_link}> {company} </span>
            </a>

        </div>

        <div className={styles.work_period}>
            <p> {duration} </p>
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
        
    </div>
  )
}

export default Work
