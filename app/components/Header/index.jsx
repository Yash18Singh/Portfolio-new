"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import './Header.css'
import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation';

const optionList = [
  { name: 'Home', url: '/' },
  { name: 'Tech Stacks', url: '/tech-stacks' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' }
]

const Header = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop(); // Extracts 'tech-stacks'
  
  console.log(lastSegment); // Output: "tech-stacks"

  const pageActive = () => {
    switch(lastSegment){
      case 'tech-stacks': return 'Tech Stacks';
      case 'projects': return 'Projects';
      case 'contact': return 'Contact';
      default: return 'Home'
    }
  }

  // Animation Variants
  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <motion.div 
      className='header'
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {/* Logo Section */}
      <Link href={'/'}>
        <motion.div 
          className='header-logo' 
          variants={itemVariants}
        >
          <h1>YS</h1>
        </motion.div>
      </Link>

      {/* Options Section */}
      <motion.div className='header-options'>
        {optionList.map((option, index) => (
          <Link key={index} href={option.url}>
           <motion.h3
              className='header-option'
              style={{color: pageActive() === option.name ? 'white' : 'black'}}
              variants={itemVariants}
              whileHover={{
                scale: 1.5,
                rotateY: 45,
                transition: { duration: 0.2 },
              }}
            >
              {option.name}
            </motion.h3>

          </Link>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Header;
