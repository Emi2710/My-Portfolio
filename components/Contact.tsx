import Image from 'next/image'
import React from 'react'

import hands from '../assets/hands.png'
import arrowRight from '../assets/arrowblack.png'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='inter bg-[color:var(--dark-rose)] p-10 rounded-3xl w-80 md:w-3/4 m-auto flex flex-col justify-center items-center'>
      <div className=' '>
        <h3 className='font-bold text-2xl md:text-3xl mt-5 mb-10 text-center'>Discutons ensemble de votre projet :) </h3>
      </div>
      
        <p className='font-semibold text-xl	mb-5'>
          Envoyez moi un email: <br />
        </p>
      <div className='flex font-semibold text-lg'>  
        <Image src={arrowRight} alt="flèche droite" className='mr-3'/> <p className='underline'><a href="mailto:example@mail.com">hey@gmail.com</a></p>
      </div>
      
      <p className='text-center font-semibold	mt-8'>Ou écrivez-moi directement un message <span className='underline'><a href="#">ici</a></span></p>
    </div>
  )
}