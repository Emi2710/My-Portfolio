import Image from 'next/image'
import React from 'react'


import mail from '../assets/mail.svg'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='jakarta text-white p-5 md:flex justify-between'>
      <div className='flex flex-col max-w-sm mb-12'>
          <div className='flex flex-col'>
            <label className='pb-2'>Votre nom</label>
            <input type="text" placeholder='Nom' className='rounded p-2 mb-5'></input> 
          </div>
        <div className='flex flex-col'>
          <label className='pb-2'>Votre adresse mail</label>
          <input type="text" placeholder='Adresse mail' className='mb-5 rounded p-2'></input> 

          <label className='pb-2'>Dîtes-moi en peu plus sur ce que vous recherchez ?</label>
          <input type="textarea" className='h-32 rounded p-2'></input> 
        </div>
        <div>
          <button className='gradient-bg py-2 px-5 rounded mt-3'>Envoyer</button>
        </div>
        
      </div>
      <div className='md:w-1/3 m-auto'>
        <div className=''>
          <p className='jakarta font-bold text-2xl md:text-3xl'>Emilie T.</p>
          <div className='flex my-5 items-center pb-8'>
            <Image src={mail} alt="icone email" width={25} />
            <a href="mailto:exemple@gmail.com" className='text-lg opacity-80 pl-2'>emilie@gmail.com</a>
          </div>
        </div>
        <div>
          <ul className='text-lg'>
            <div className='flex justify-between my-5'>
              <li>Projets</li>
              <li>À propos</li>
              <li>Services</li>  
            </div>
            <div className='flex justify-between my-5'>
              <li>Blog</li>
              <li>LinkedIn</li>
              <li>Github</li>  
            </div>
            
            
          </ul>
        </div>
      </div>
      
    </div>
  )
}