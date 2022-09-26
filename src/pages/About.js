import React from 'react'
import Skills from '../components/Skills'
import Work from '../components/Work'
import styles from './About.module.css'
import { motion } from 'framer-motion'
import Certification from '../components/Certification'
import ConnectIcons from '../components/ConnectIcons'

export const About = () => {

  const aboutVariants = {
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
        stiffness: "20"
      }

    }
  }


  const skillsArray = ["HTML", "CSS", ". ", "Javascript", "Kotlin", "XML", "React", 
  "JSX", ". ", "Android Studio", "Firebase", "Adsense", "Git", "GitHub", "MS Word",
  "Adsterra", "WordPress", "PHP", "API", "Android Development", "Web Design", "Google Analytics",
  "Management", "Research", "C++", "C#", "Unity Engine", "Game Development", "SFML", ". ", "Databases",
  "Framer Motion (React JS)"] 

  const texasDuties = ["Responsible for both front-end and back-end development of the website", 
      "Implemented WordPress themes and plugins as well as site integration and security updates",
      "Designing and implementing new features on the website"]

  const anchorDuties = ["Design and build 12Leaf mobile app for the Android platform", 
      "Monitored app reviews to detect areas for improvement", 
      "Worked with a team of three designers to build the website using the React Library (In Progress)",
      "Work with outside data sources and API's including Firebase"]

  const aqSkill = ["Completed HTML and CSS Frontend web development practical course at AQSkill, Nigeria"]

  const Udacity = ["Completed a Web Development Foundation Nanodegree on Udacity"]

  const linkedIn = ["Completed a course on WordPress on LinkedIn Learning"]

  return (
    <motion.div 
      className={styles.about_wrapper}
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
    >


      <div className={styles.about_section}>

        <div className={styles.about_me}>

          <h1>About Me</h1>

          <p className={styles.about_summary}>
            Hello! My name is Olayinka, and I like making things that live on the internet.
            My interest in web and android development began back in 2020 when I decided to try creating 
            a task management app for myself. 
            It turns out that taking an Android Development course on Udemy can ignite my never-ending 
            passion for creating things. <br/><br/>

            Fast-forward to today, and I've had the privilege of working with two modest start-up companies: 
            one that aims to improve the accessibility of distant healthcare in Africa, 
            and the other that grants firearm permits in Texas. 
            Other than learning, I also enjoy creating inclusive and digital experiences at 
            <a href='https://www.upwork.com/freelancers/~018285870105e38551' target="_blank"> Upwork </a>
            for a variety of clients.
          </p>

        </div>

        <div className={styles.skills_section}>

          <h1>Skills</h1>

          {
            skillsArray.map((singleSkill, index) => 
            <Skills key={index} skill={singleSkill} />
            )
          }
          

        </div>

      </div>

      
      <div className={styles.about_section}>
        
        <div className={styles.about_me}>
          
          <h1>Work Experience</h1>

          <Work position={"Software Developer (Remote)"} company={"12Leaf Diary"} duration={"December 2021 - Present"} 
            duties={anchorDuties} link={"https://www.12leafdiary.com"} />
          
          <Work position={"Wordpress Developer"} company={"Texasgunlicense"} duration={"March 2021 - December 2021"} 
            duties={texasDuties} link={"https://texasgunlicense.net"} />



        </div>

        <div className={styles.learning_section}>

        <h1>Learning Experience</h1>
        
        <p className={styles.about_summary}>

        Despite the fact that I was studying Political Science (B.sc) in school, 
        I always tried my hardest to get out of my comfort zone, and during the COVID-19, 
        I stumbled upon some Udemy courses and haven't stopped exploring since then.
        </p>

        <Certification skill={"Frontend Web Development"} company={"AQSkill"} status={"Completed"} 
            duties={aqSkill} link={"https://www.aqskill.com/"} 
            certificate={"https://drive.google.com/file/d/1vLMhPnIg-pISf0CamtBgbNdqac1mMJ2-/view?usp=sharing"} />
        
        <Certification skill={"Web Development Foundations"} company={"Udacity"} status={"Completed"} 
            duties={Udacity} link={"https://www.udacity.com/"} 
            certificate={"https://drive.google.com/file/d/1CDYJ0xeXqiQwCg30ovFjjxFCU2ODt_ss/view?usp=sharing"} />

        <Certification skill={"Wordpress 5 Essential Training"} company={"LinkedIn Learning"} status={"Completed"} 
            duties={linkedIn} link={"https://www.linkedin.com/learning/"} 
            certificate={"https://drive.google.com/file/d/1MSLzRyEGRNngL_-6zIUUVEF81q6ggKUP/view?usp=sharing"} />

        <Certification skill={"Learn Kotlin Course"} company={"Codecademy"} status={"Completed"} 
            duties={linkedIn} link={"https://www.codecademy.com/"} 
            certificate={"https://www.codecademy.com/profiles/net23465757/certificates/a549293c6e8d62a61ef1bec410b58162"} />

        </div>

      </div>

      <ConnectIcons />



    </motion.div>
  )
}

export default About
