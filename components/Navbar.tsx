import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mail from '../assets/mail.png';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
    {/*<div className='flex justify-center bg-[color:var(--bg-color)] inter font-medium items-center h-16'>
      <ul className='flex'>
        <Link href="#projets">
          <li className='pr-5'>Projets</li> 
        </Link>

        <Link href="#a-propos">
          <li className='pr-5'>À propos</li>  
        </Link>

        <Link href="#services">
          <li className='pr-5'>Services</li>
        </Link>

        <Link href="#blog">
          <li className='pr-5'>Blog</li>
        </Link>

        
                
      </ul>
      <Link href="mailto:example@gmail.com">
        <div className='flex items-center pl-10'>
            <Image src={mail} alt="icone de mail" width={30} /> <p className='opacity-80 pl-1'>Contact</p>   
        </div>
      </Link>  
  </div>*/}
    </>
    
    
  )
}