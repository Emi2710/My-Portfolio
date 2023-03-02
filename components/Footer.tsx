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
      <div className='inter font-bold flex justify-between items-center p-3 md:p-8 mt-16'>
        <p className='text-xs md:text-base'>Copyright @2023</p>
        <div className='flex'>
          <Image src={telegram} alt="telegram icon" className='minWidth mr-3'/>
          <Image src={mail} alt="mail icon" className='minWidth mr-3'/>
          <Image src={linkedin} alt="linkedin icon" className='minWidth mr-3'/>
          <Image src={github} alt="github icon" className='minWidth mr-3'/>

        </div>
      </div>
    </div>
  )
}