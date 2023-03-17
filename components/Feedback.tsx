import React from 'react';
import Image from 'next/image';

import quotes from '../assets/quotes.png';

type Props = {}

export default function Feedback({}: Props) {
  return (
    <div className='md:mt-12 py-5'>
      <p className='inter gradient uppercase font-bold text-xl tracking-widest pl-3 md:pl-14 mt-9'>témoignages</p>
      <div>
        <Image src={quotes} alt="guillemets" className='mt-8 ml-3 md:ml-14' />
        <p className='jakarta font-bold text-xl md:text-3xl pt-8 pl-3 md:pl-14 md:w-3/4 leading-10'>
          Le site correspond parfaitement à la demande faite et aux critères exigés, même mieux, très professionnel, propre et dans les temps, je recommande à 100%!
        </p>
        <p className='inter font-semibold text-xl md:text-2xl pt-8 pl-3 md:pl-14 w-3/4 leading-10'>
          -Alice
        </p>
        <p className='inter opacity-80 font-semibold text-md md:text-xl pt-3 pl-3 md:pl-14 w-3/4'>Du blog &quot;Alice Formation&quot;</p>
      </div>
      
    </div>
  )
}