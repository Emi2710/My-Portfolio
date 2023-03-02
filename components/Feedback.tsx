import React from 'react';
import Image from 'next/image';

import quotes from '../assets/quotes.png';

type Props = {}

export default function Feedback({}: Props) {
  return (
    <div className='mb-24'>
      <h3 className='baskerville text-2xl font-bold opacity-80 text-center py-10'>Retours clients :</h3>
      <div className='inter flex flex-col justify-center items-center'>
        <Image src={quotes} alt="icone de citation" />
        <p className='italic md:w-1/2 text-center px-2'>
          J’intègre un système de gestion de contenu pour vous permettre de modifier, supprimer ou ajouter du contenu à votre site à tout moment.
        </p>
        <p className='font-medium pt-2'>Alice Formation</p>
      </div>
      
    </div>
  )
}