import React from 'react'
import Image from 'next/image'
import education from '../assets/education.svg'
import work from '../assets/work.svg'
import expo from '../assets/expo.jpg'
import freelance from '../assets/freelance.svg'

import { motion } from 'framer-motion'

type Props = {}

export default function Education({}: Props) {

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
        className='md:flex justify-center jakarta mt-5'
    >
        <motion.div 
            variants={blockAnimation} 
            custom={3}
            className='p-5 md:mr-32'
        >
            <div className='flex items-center'>
                <Image src={education} alt="icone éducation" />
                <h3 className='jakarta font-bold text-2xl md:text-4xl pl-3'>Éducation</h3>
            </div>
            <div className='pt-5'>
                <div className='py-5'>
                    <p className='text-lg inter font-semibold'>STUDI</p>
                    <div className=' opacity-80'>
                        <p className='pt-2'>Gradute Développeur Web Full-Stack</p>
                        <p className='pt-2'>• 2020-2022</p>    
                    </div>
                    
                </div>
                <hr/>
                <div className='py-5'>
                    <p className='text-lg inter font-semibold'>HETIC</p>
                    <div className=' opacity-80'>
                        <p className='pt-2'>Bachelor Développeur d&apos;Applications Python</p>
                        <p className='pt-2'>• 2022-2023</p>    
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div
            variants={blockAnimation} 
            custom={5} 
            className='p-5'
        >
            <div className='flex items-center'>
                <Image src={work} alt="icone éxperience professionnelle" />
                <h3 className='jakarta font-bold text-2xl md:text-4xl pl-3'>Éxperience</h3>
            </div>
            <div className='pt-5'>
                <div className='flex items-center'>
                    <div>
                        <Image src={expo} alt="logo expovision" width={50} className="rounded-full mr-5" />
                    </div>
                    <div className='py-5'>
                        <p className='text-lg inter font-semibold'>EXPOVISION</p>
                        <div className=' opacity-80'>
                            <p className='pt-2'>International-IT-Company</p>
                            <p className='pt-2'>• 2022</p>    
                        </div>
                        
                    </div>    
                </div>
                
                <hr/>
                <div className='flex items-center'>
                    <div>
                        <Image src={freelance} alt="logo freelance" width={45} className=" mr-5" />
                    </div>
                    <div className='py-5'>
                        <p className='text-lg inter font-semibold'>Freelance</p>
                        <div className=' opacity-80'>
                            <p className='pt-2'>Développement Web</p>
                            <p className='pt-2'>• 2022-2023</p>    
                        </div>
                        
                    </div>    
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}