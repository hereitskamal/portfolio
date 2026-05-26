'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const SplitText = ({ text, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  // Split text into characters
  const characters = text.split('')

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const words = text.split(' ')

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      style={{ display: 'block' }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => {
            const globalIndex = text.indexOf(word) + ci
            return (
              <motion.span
                key={ci}
                variants={childVariants}
                style={{
                  display: 'inline-block',
                  transformOrigin: 'bottom center',
                  transformStyle: 'preserve-3d'
                }}
              >
                {char}
              </motion.span>
            )
          })}
          {wi < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.div>
  )
}

export default SplitText
