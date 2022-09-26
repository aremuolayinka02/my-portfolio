import React from 'react'
import styles from './Works.module.css'
import Projects from '../components/Projects'
import Leaf from '../images/leaf.webp'
import Texas from '../images/texas.png'
import Robofriend from '../images/robofriend.png'
import Todo from '../images/todo-icon.ico'
import Helmet from '../images/helmet.png'
import ConnectIcons from '../components/ConnectIcons'
import Portfolio from '../images/portfolio.svg'

export const Works = () => {

  const a12leaf = ["12Leaf Diary App", "The digital self-care diary that helps you to take control of your herb intake and take charge of your health.",
                  ["Kotlin", "XML", "Firebase", "Android Studio", "Android SDK"]]

  const texasGun = ["Texasgunlicense", "A wordpress website for an online instructor with decades of experience in both Firearm Laws and Education to issue gun license to qualified people in Texas",
  ["Wordpress", "PHP", "CSS", "HTML", "Elementor", "Plugin development"]]

  const robofriend = ["RoboFriends", "A single-page web app that will aid in my understanding of how APIs' work better in React JS",
  ["Javascript", "API", "HTML", "CSS", "React JS"]]

  const todoList = ["Browser Notepad", "This is one of my open source project on GitHub, It is an offline todo list that stores data with localStorage on the browser",
  ["Javascript", "HTML", "CSS"]]

  const portfolio = ["My Portfolio v1", "This is my first web app portfolio created with React JS, one of my open source projects 😉",
  ["Javascript", "API", "HTML", "CSS", "React JS"]]

  const magicMemory = ["Magic Memory", "Created the entire website using React.js when taking a React course. The original design has been modified due to rebranding, so it's a total mess at this point 😞",
  ["Javascript", "HTML", "CSS Module", "CSS", "React JS"]]



  return (
    <div className={styles.works_section}>
        
        <div className={styles.works_header}>
            <p>Some Things I've Built</p>
            <hr></hr>
        </div>

        <div className={styles.projects}>
            <Projects image={Leaf} project={a12leaf[0]} note={a12leaf[1]} languages={a12leaf[2]} 
            link={"https://play.google.com/store/apps/details?id=com.anchortherapeutics.a12leafdiary&hl=en&gl=US"} 
            github={"null"}/>

            <Projects image={Texas} project={texasGun[0]} note={texasGun[1]} languages={texasGun[2]} 
            link={"https://play.google.com/store/apps/details?id=com.anchortherapeutics.a12leafdiary&hl=en&gl=US"} 
            github={"null"}/>

            <Projects image={Robofriend} project={robofriend[0]} note={robofriend[1]} languages={robofriend[2]} 
            link={"https://aremuolayinka02.github.io/robofriends/"} 
            github={"https://github.com/aremuolayinka02/robofriends"}/>

            <Projects image={Todo} project={todoList[0]} note={todoList[1]} languages={todoList[2]} 
            link={"https://aremuolayinka02.github.io/browser-notepad/"} 
            github={"https://github.com/aremuolayinka02/browser-notepad"}/>

            <Projects image={Helmet} project={magicMemory[0]} note={magicMemory[1]} languages={magicMemory[2]} 
            link={"https://aremuolayinka02.github.io/magic-memory/"} 
            github={"https://github.com/aremuolayinka02/magic-memory/"}/>

            <Projects image={Portfolio} project={portfolio[0]} portfolio={magicMemory[1]} languages={portfolio[2]} 
            link={"https://aremuolayinka02.github.io/magic-memory/"} 
            github={"https://github.com/aremuolayinka02/my-portfolio"}/>

            
        </div>

        <ConnectIcons />

    </div>
  )
}

export default Works
