import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrowRight from '../assets/arrow_right.png'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='py-20'>
      <div className=' mt-16 pl-4 lg:pl-24 xl:pl-36'>
        <h2 className='jakarta text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold opacity-90 mb-5'>Enchantée, moi c&apos;est Emilie.</h2>
        <h1 className=' jakarta text-2xl sm:text-3xl lg:text-5xl lg:max-w-4xl 2xl:text-5xl 2xl:max-w-4xl 2xl:max-w-2xl font-bold'>Je suis développeuse web, <span className='gradient'>j&apos;aide vos projets à voir le jour et booster votre business.</span></h1>
        <div className='flex items-center pt-5'>
          <Link href="#services">
            <button className='mr-5 flex items-center bg-[#000] text-[#fff] inter font-medium rounded-sm px-3 py-1 mt-5 '>Mes services <Image src={arrowRight} alt="flèche droite" width={30} /></button>
          </Link>
          <Link href="#a-propos">
            <p className='pt-5 inter font-medium opacity-80 underline underline-offset-4'>En savoir plus</p>
          </Link>
        </div>
      
      </div>
    </div>
  )
}