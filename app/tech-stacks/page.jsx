"use client"
import React from 'react'
import './TechStacks.css'
import { TechStackList } from '../data'
import { motion } from 'framer-motion'

const TechStacks = () => {

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  // Animation for initial appearance
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  // Generate random rotation direction on hover
  const getRandomRotation = () => (Math.random() > 0.5 ? 10 : -10);

  return (
    <div className='tech-stacks-container'>
      <motion.div 
        className='tech-stacks-list'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {
          TechStackList.map((tech) => (
            <motion.div 
              key={tech.id} 
              className='tech-stack'
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: getRandomRotation(),
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={tech.logo}
                alt={tech.name}
                whileHover={{
                  rotate: getRandomRotation(),
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
              <h1>@{tech.name}</h1>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default TechStacks
