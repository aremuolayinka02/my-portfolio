import React from 'react'
import styles from './Skills.module.css'

export const Skills = ({ skill }) => {
  return (
    <div className={styles.skill_wrapper}>
        <p className={styles.paragraph}>{ skill }</p>
    </div>
  )
}

export default Skills
