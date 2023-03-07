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
          Le site correspond parfaitement à la demande faite et aux critères exigés, même mieux, très professionnel, propre et dans les temps, je recommande à 100%!
        </p>
        <p className='font-medium pt-2'>Alice Formation</p>
      </div>
      
    </div>
  )
}