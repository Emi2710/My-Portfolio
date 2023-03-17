import Image from 'next/image'
import React from 'react'

import telegram from '../assets/telegram.png'
import mail from '../assets/arroba.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div>
      <div className='inter flex justify-between items-center py-5 bg-black text-white'>
        <p className='text-xs md:text-base pl-5 opacity-80'>@ Tout droit réservé</p>
        {/*<div className='flex'>
          <Image src={telegram} alt="telegram icon" className='minWidth mr-3'/>
          <Image src={mail} alt="mail icon" className='minWidth mr-3'/>
          <Image src={linkedin} alt="linkedin icon" className='minWidth mr-3'/>
          <Image src={github} alt="github icon" className='minWidth mr-3'/>

  </div>*/}
      </div>
    </div>
  )
}