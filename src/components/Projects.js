import React from 'react'
import styles from './Projects.module.css'
import GitHubIcon from '../icons/github.png'
import Link from '../images/link.png'

export const Projects = ( {image, project, note, languages, link, github} ) => {
  return (
  
      <div className={styles.projects_container}>

        <div className={styles.project_card}>

          <div className={styles.image_section}>
            
            <div className={styles.overlay_2}>
              <img src={image} alt="project image" />
            </div>

          </div>

          <div className={styles.info_section}>
            <h2>{project}</h2>

            <p className={styles.info_content}>{note}</p>

            <div className={styles.stack_list}>

              {
                languages.map((language, index) => (
                  <p key={index}>{language}</p>
                ))
              }

            </div>

            <div className={styles.project_links}>


            {
              github !== "null" && (
                <a href={github} target="_blank">
               <img src={GitHubIcon} width="30px" alt="git link" /> 
              </a>
              )
            }
            

            <a href={link} target="_blank">
              <img src={Link} width="30px" alt="git link" />
            </a>
            
          </div>

          </div>

        </div>
        
      </div>  

  )
}

export default Projects
