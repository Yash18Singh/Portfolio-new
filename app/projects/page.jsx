"use client"
import React, { useEffect, useState } from 'react'
import './Projects.css'
import { projectList } from '../data'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleX, Github } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    console.log(selectedProject)
  }, [selectedProject])

  // Variants for Project List Animation
  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  // Variants for Project Details Animation
  const detailsVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { 
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 60 }
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } }
  }

  return (
    <div className='projects-container'>
      {/* Animate Presence ensures animations when components are removed */}
      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            key="project-details"
            className='projects-details'
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className='selected-project'>
              <section style={{ cursor: 'pointer' }} className='close'>
                <CircleX onClick={() => setSelectedProject(null)} size={40} />
              </section>

              <section className='selected-project-details'>
                <motion.img 
                  src={selectedProject.image}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className='project-details-right'>
                  <h1>{selectedProject.name}</h1>
                  <h2>{selectedProject.description}</h2>
                  
                  <article className='project-details-tags'>
                    {selectedProject.tags.map((tag, index) => (
                      <h3 key={index}>#{tag}</h3>
                    ))}
                  </article>

                  <article className='project-details-button'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={() => window.open(selectedProject.demo)}
                      className='demo-button'
                    >
                      <h3>DEMO</h3>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      onClick={() => window.open(selectedProject.github)} 
                      style={{ cursor: 'pointer' }}
                    >
                      <Github size={50} />
                    </motion.div>
                  </article>
                </div>
              </section>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="project-list"
            className='projects-list'
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {projectList.map((project) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className='single-project'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.image} alt={project.name} />
                <h1>{project.name}</h1>
                <div onClick={() => setSelectedProject(project)} className='details-button'>
                  <h3>DETAILS</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
