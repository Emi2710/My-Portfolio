import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrowRight from '../assets/arrow_right.png'

import { motion } from 'framer-motion'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='py-20'>
      <div className=' mt-16 pl-4 lg:pl-24 xl:pl-36'>
        <h2 className='jakarta text-xl sm:text-xl lg:text-2xl 2xl:text-3xl font-bold opacity-80 mb-5'>Enchantée, moi c&apos;est Emilie.</h2>
        <h1 className=' jakarta text-3xl lg:text-5xl lg:max-w-4xl 2xl:text-5xl 2xl:max-w-4xl 2xl:max-w-2xl font-bold'>Je suis développeuse web, <span className='gradient'>j&apos;aide vos projets à voir le jour et booster votre business.</span></h1>
        <p className=' hidden md:block text-lg pt-3 jakarta opacity-80'>Spécialisée dans la création de sites web professionnels et élégants -<br /> laissez-moi vous aider à vous démarquer.</p>
        <div className='flex items-center pt-5'>
          <Link href="#services">
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <button className='mr-5 flex items-center bg-[#000] text-[#fff] inter font-medium rounded-sm px-3 py-1 mt-5 '>Mes services <Image src={arrowRight} alt="flèche droite" width={30} /></button>  
            </motion.div>
            
          </Link>
          <Link href="#a-propos">
            <p className='pt-5 inter font-medium opacity-80 underline underline-offset-4 hover:opacity-100 duration-75'>En savoir plus</p>
          </Link>
        </div>
      
      </div>
    </div>
  )
}