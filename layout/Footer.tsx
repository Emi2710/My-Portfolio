import React from 'react'
import mail from '../assets/mail.svg'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='jakarta text-white bg-black py-5' id="contact">
        <h2 className='jakarta text-3xl md:text-4xl font-bold mt-24 px-5 m-auto text-white'>Prêts à faire décoller votre projet ?<br /><a href="#" className='jakarta gradient font-bold text-3xl md:text-4xl'>Contactez-moi.</a></h2>
        <div className='md:w-1/3 px-5 py-16'>
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