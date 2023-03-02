import Image from 'next/image'
import React from 'react'
import condition from '../assets/condition.png'
import plus from '../assets/plus.png'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='bg-[color:var(--light-rose)] md:w-4/5 md:rounded-3xl md:m-auto md:py-5'>
      
      <div className='md:flex flex-row-reverse justify-around md:w-4/5 md:m-auto'>
        <div className='max-w-sm ml-5'>
          <h2 className='text-2xl baskerville font-bold pl-2 opacity-80 pt-8 '>Votre site est il optimisé ?</h2> 
          <div className='flex items-center px-2'>
            <Image src={condition} alt="icone" width={25} className="minWidth" />
            <p className='pl-5 py-5 inter opacity-90'>Un site intégré avec les meilleurs outils d’analyse marketing pour une stratégie optimale</p>
          </div> 

          <div className='flex items-center px-2'>
            <Image src={condition} alt="icone" width={25} className="minWidth" />
            <p className='pl-5 py-5 inter opacity-90'>Seo optimisé pour apparaître parmi les premiers dans les moteurs de recherches</p>
          </div> 

          <div className='flex items-center px-2'>
            <Image src={condition} alt="icone" width={25} className="minWidth" />
            <p className='pl-5 py-5 inter opacity-90'>Dynamique et rapide au chargement pour une meilleure expérience utilisateur</p>
          </div> 
        </div>
        <div className='flex flex-col justify-center items-start ml-6 py-5'>
  
          <div className='flex items-center justify-center bg-[color:var(--light-brown)] h-2 my-5'>
            <Image src={plus} alt="plus icon" className='minWidth' />
            <p className='baskerville font-bold text-2xl pl-3 '>de visiblité</p>
          </div>

          <div className='flex items-center justify-center bg-[color:var(--light-brown)] h-2 my-5'>
            <Image src={plus} alt="plus icon" className='minWidth' />
            <p className='baskerville font-bold text-2xl pl-3'>de clients</p>
          </div>

          <div className='flex items-center justify-center bg-[color:var(--light-brown)] h-2 my-5'>
            <Image src={plus} alt="plus icon" className='minWidth' />
            <p className='baskerville font-bold text-2xl pl-3'>de satisfaction</p>
          </div>
        </div>  
            
          
          
        
      </div>
    </div>
  )
}