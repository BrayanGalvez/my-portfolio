import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () =>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5tzqujs', 'template_i3hhq6n', form.current, 'QTQjBDuAgHep1y6K1')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>brayan.developer20@gmail.com</h5>
            <a href="mailto:brayan.developer20@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@BrayanSGalvez</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=1592206711808557057" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3005417293</h5>
            <a href="https://api.whatsapp.com/send?phone=573005417293" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact