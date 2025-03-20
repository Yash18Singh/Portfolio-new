"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import './Homepage.css'
import Image from 'next/image'

const Homepage = () => {
  const [transformStyle, setTransformStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 6; // More dramatic tilt
    const y = (e.clientY - top - height / 2) / 6;

    // Shadow moves in the opposite direction
    const shadowX = -x * 2; 
    const shadowY = -y * 2;

    setTransformStyle({
      transform: `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`,
      boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 1)`
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: 'perspective(800px) rotateY(0deg) rotateX(0deg)',
      boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.3)'
    });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'YashwantSingh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animations
  const textVariants = {
    hidden: { opacity: 0, x: -700 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "5px 5px 10px rgba(0,0,0,0.3)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className='homepage'>
      <motion.div 
        className='homepage-box'
        initial="hidden"
        animate="visible"
      >
        {/* Left Section */}
        <div className='homepage-box-left'>
          <motion.h1 variants={textVariants} style={{fontSize:40}}>Hi! I'm</motion.h1>
          <motion.h1 variants={textVariants} style={{ color: '#ff7a00', fontSize:40}}>YASHWANT</motion.h1>
          <motion.h5 variants={textVariants}>
             MERN STACK Developer, Front-End Designer & Mobile App Developer
          </motion.h5>

          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={downloadResume} 
            className='resume-button'
            style={transformStyle}
          >
            <h4>RESUME</h4>
          </div>
        </div>

        {/* Right Section */}
        <div className='homepage-box-right'>
          <motion.img
            className='profile-img'
            src={'/my-img.png'}
            alt="Profile"
            variants={imageVariants}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Homepage;
