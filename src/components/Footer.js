import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import Home from '../icons/home.svg'
import About from '../images/about.png'
import Works from '../images/works.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>

        <NavLink to={'/my-portfolio'} className={({isActive}) =>  (isActive ? styles.activeFooter : styles.unactiveFooter) }>
            
            <div className={styles.link_container}>
                <img src={Home} alt="home image" width="28px" />
                <p>Home</p>
            </div>
            
        </NavLink>    

        <NavLink to={'/about'} className={({isActive}) =>  (isActive ? styles.activeFooter : styles.unactiveFooter) }>
            
        <div className={styles.link_container}>
                <img src={About} alt="home image" width="28px" />
                <p>About</p>
            </div>
            
        </NavLink>  

        <NavLink to={'/works'} className={({isActive}) =>  (isActive ? styles.activeFooter : styles.unactiveFooter) }>
            
        <div className={styles.link_container}>
                <img src={Works} alt="work image" width="28px" />
                <p>Works</p>
            </div>
            
        </NavLink>  

        <NavLink to={'/contact'} className={({isActive}) =>  (isActive ? styles.activeFooter : styles.unactiveFooter) }>
            
        <div className={styles.link_container}>
                <img src={Home} alt="contact image" width="28px" />
                <p>Contact</p>
            </div>
            
        </NavLink>  

        {/* <NavLink to={'/contact'} className={({isActive}) =>  (isActive ? styles.activeFooter : styles.unactiveFooter) }>
            
        <div className={styles.link_container}>
                <img src={Home} alt="another contact image" width="28px" />
                <p>Contact</p>
            </div>
            
        </NavLink>   */}

    </div>
  )
}

export default Footer
