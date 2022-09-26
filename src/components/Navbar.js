import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>

        <Logo />


        <div className={styles.right_nav}>

          <nav>
            <NavLink to={'/my-portfolio'} className={({isActive}) =>  (isActive ? styles.activeLink : styles.unactiveLink) }>Home</NavLink>    
            <NavLink to={'/about'} className={({isActive}) =>  (isActive ? styles.activeLink : styles.unactiveLink) }>About</NavLink>    
            <NavLink to={'/works'} className={({isActive}) =>  (isActive ? styles.activeLink : styles.unactiveLink) }>Works</NavLink>     
            <NavLink to={'/contact'} className={({isActive}) =>  (isActive ? styles.activeLink : styles.unactiveLink) }>Contact</NavLink> 
          </nav>

          <div className={styles.my_resume}>
            <button><a target="_blank" href={"my-portfolio/my_resume.pdf"}>Resume</a></button>
          </div>

        </div>

    </div>
  )
}

export default Navbar
