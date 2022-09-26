import React, { useState } from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'
import { send } from 'emailjs-com';
import { Modal } from "react-modal-mrl"
import ConnectIcons from '../components/ConnectIcons';

export const Contact = () => {


    const contactIntroVariants = {
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
            stiffness: "30"
          }
    
        }
      }


    const contactVariants = {
        shakingAnim: {
          scale: [0.90, 1],
          ease: "easeInOut",
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: "1.8"
    
          }
    
        }
      }


      const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      })


      const onSubmit = (e) => {
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}

        send(
          'service_wrvz5zs',
          'template_2twe0ow',
          toSend,
          'b_Wk4DJJdjeKaSfsf'
        )
          .then((response) => {
            trigger()

            //Reset the form
            setToSend( {
                from_name: '',
                to_name: '',
                message: '',
                reply_to: '',
            } )

          })
          .catch((err) => {
            console.log('FAILED...', err);
          });

      }

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      }

      const [modal, setModal] = useState(false);
      const trigger = () => setModal(!modal);
    



  return (
    <motion.div 
        variants={contactIntroVariants}
        initial="hidden"
        animate="visible"
        className={styles.contact_container}
    >


        <div className={styles.contact_content}>
    
            <Modal show={modal} close={trigger} title="Message Sent"></Modal>

            <motion.h1
             variants={contactVariants}
             animate="shakingAnim"
            >
                Contact Me
            </motion.h1>

            <p>Have any questions? Feel free to ask.</p>

            <form 
                onSubmit={onSubmit} 
                className={styles.contact_form}
                autoComplete="off"
            >

            <label htmlFor="full name">Full name</label>

            <input 
                type='text'
                name='from_name'
                placeholder='Aremu Olayinka'
                value={toSend.from_name}
                onChange={handleChange} 
            />

            <label htmlFor="full name">Email Address</label>

            <input 
                type='email'
                name='to_name'
                placeholder='aremuolayinka02@gmail.com'
                value={toSend.to_name}
                onChange={handleChange} 
            />

            <label htmlFor="full name">Message</label>

            <textarea 
                type='text'
                name='message'
                placeholder='Hi there, are you open to new opportunities? 😉'
                value={toSend.message}
                onChange={handleChange} 
            />

            <button type='submit'>Submit</button>
        
            </form>

            <p className={styles.footer_text}>For curious nerds: Yes, this form actually works. So stop sending me test emails.</p>

        </div>

        <ConnectIcons />

    </motion.div>
  )
}

export default Contact
