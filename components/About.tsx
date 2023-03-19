import Image from 'next/image'
import React from 'react'
import dev1 from '../assets/about/dev1.jpg'
import dev2 from '../assets/about/dev2.jpg'

import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { duration: custom * 0.2}
    }),
  }


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2}}
    >
      <motion.div 
        variants={textAnimation} 
        custom={2}
        className='md:flex justify-around items-center'
      >
        <div className='py-3'>
          <p className='inter gradient uppercase font-bold text-xl tracking-widest pl-3 md:pl-14 mt-9'>développeuse web</p>
          <h3 className='jakarta font-bold text-3xl md:text-4xl pt-8 pl-3 md:pl-14'>À mon propos !</h3>
        </div>  
        <div className='pt-14'>
          <p className='jakarta opacity-70 text-xl leading-10 pl-3'>Passionnée par l&apos;informatique, je crée maintenant des sites web <br />pour mes clients en tant que développeuse.<br />Après tout, ce qu&apos;on aime on le fait bien, n&apos;est-ce-pas ?</p>
        </div>
      </motion.div>
      <motion.div 
        variants={textAnimation} 
        custom={3}
        className='md:flex justify-around py-16'
      >
        <Image src={dev1} alt="Image illustrant un espace de travail" className='width p-3' />
        <Image src={dev2} alt="Image illustrant un espace de travail" className='width hidden md:block p-3' />
      </motion.div>
      
    </motion.div>
  )
}