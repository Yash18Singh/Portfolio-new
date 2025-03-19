"use client";
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {

  // Variants for form animation
  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Variants for links animation
  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.2, duration: 0.5 }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className='contact-container'>
      <div className='contact-body'>

        {/* Form Section */}
        <motion.form
          className="contact-form"
          action="https://formsubmit.co/yashwantsingh071@gmail.com"
          method="POST"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <input type="text" name="name" placeholder="Name..." required />
          <input type="email" name="email" placeholder="Email..." required />
          <textarea name="message" placeholder="Message..." required></textarea>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            SEND
          </motion.button>
        </motion.form>

        {/* Links Section */}
        <div className='contact-links'>
          {[
            { url: 'mailto:yashwantsingh071@gmail.com', img: '/contact-logo/mail-logo.png' },
            { url: 'tel:+91-9871517759', img: '/contact-logo/phone-logo.png' },
            { url: 'https://www.linkedin.com/in/yashwant-singh-38844519a/', img: '/contact-logo/linkedin-logo.png' },
            { url: 'https://leetcode.com/u/yashwantsingh071/', img: '/contact-logo/leetcode-logo.png' },
            { url: 'https://github.com/Yash18Singh', img: '/contact-logo/github-logo.png' }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div className='single-link'>
                <img src={link.img} alt="contact-logo" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
