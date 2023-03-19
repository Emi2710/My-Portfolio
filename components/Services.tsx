import Image from 'next/image'
import React from 'react'

import icone1 from '../assets/icone1.svg'
import icone2 from '../assets/icone2.svg'
import icone3 from '../assets/icone3.svg'

import { motion } from 'framer-motion'


type Props = {}

export default function Services({}: Props) {

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

  const blockAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
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
      <motion.p variants={textAnimation} custom={2} className='inter gradient text-center uppercase font-bold text-xl tracking-widest'>Services</motion.p>
      <motion.h2 variants={textAnimation} custom={3} className='jakarta text-3xl md:text-4xl font-bold text-center pt-6 px-2 m-auto'>Créez une présence en ligne qui impressionne</motion.h2>
      <motion.div className='md:flex justify-around py-16'>
        <motion.div className='md:w-1/4 p-5 md:p-0' variants={blockAnimation} custom={3}>
          <Image src={icone1} alt="icone"/>
          <h3 className='text-lg md:text-xl font-bold py-3'>Ce que je peux faire pour vous</h3>
          <p className='inter font-medium opacity-80'>Un site dynamique avec un design moderne qui répond à vos besoins.</p>
          <ul className='inter font-bold list-disc pt-3'>
            <li className='ml-4 pt-3'>Création de sites web</li>
            <li className='ml-4 pt-2'>Refonte/optimisation de sites existants</li>
            <li className='ml-4 pt-2'>Maintenance de site web</li>
          </ul>
        </motion.div>

        <motion.div className='md:w-1/4 p-5 md:p-0 md:m-0 mt-3' variants={blockAnimation} custom={4}>
          <Image src={icone2} alt="icone"/>
          <h3 className='text-lg md:text-xl font-bold py-3'>Les programmes que j&apos;utilise</h3>
          <p className='inter font-medium opacity-80'>Voici les outils que j&apos;utilise pour créer ces petites merveilles. </p>
          <ul className='inter font-bold list-disc pt-3'>
            <li className='ml-4 pt-3'>Langages de programmation</li>
            <li className='ml-4 pt-2'>Webflow et constructeur de site</li>
            <li className='ml-4 pt-2'>Figma</li>
          </ul>
        </motion.div>

        <motion.div className='md:w-1/4 p-5 md:p-0 md:m-0 mt-3' variants={blockAnimation} custom={5}>
          <Image src={icone3} alt="icone"/>
          <h3 className='text-lg md:text-xl font-bold py-3'>À quoi vous attendre</h3>
          <p className='inter font-medium opacity-80'>Au dela du supercifiel, je crée des sites réellement optimisé en profondeur.</p>
          <ul className='inter font-bold list-disc pt-3'>
            <li className='ml-4 pt-3'>Dynamique et rapide</li>
            <li className='ml-4 pt-2'>Design moderne</li>
            <li className='ml-4 pt-2'>Optimisé pour les moteurs de recherche</li>
          </ul>
        </motion.div>
      </motion.div>
     
    </motion.div>
  )
}