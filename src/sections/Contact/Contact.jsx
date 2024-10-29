import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y5fx52v', 'template_pn5ddkt', form.current, 'kd1rzbS7PYCIjS7l3')
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id='contact' className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name" 
            required
          />
        </div>           
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Email" 
            required
          />
        </div>           
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea  
            name="message" 
            id="message" 
            placeholder="Message" 
            required>
          </textarea>                
        </div>
        <input 
          className="hover btn" 
          type="submit" 
          value="Submit" 
        />           
      </form>
    </section>
  );
}

export default Contact;
