import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import arrowRight from '../assets/arrow_right.png'
import arrow from '../assets/arrow.png'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='pb-20'>
      <div className='bg-[color:var(--bg-color)] mt-16 pl-4 lg:pl-24 xl:pl-36'>
        <h2 className='baskerville text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold opacity-80 mb-5'>Enchantée, moi c'est Emilie.</h2>
        <h1 className='baskerville text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 2xl:max-w-4xl max-w-2xl font-bold opacity-90'>Je suis développeuse web, <span className='text-[color:var(--coral)]'>j'aide vos projets à voir le jour et booster votre business.</span></h1>
        <div className='flex items-center'>
          <Link href="#services">
            <button className='mr-5 flex items-center bg-[color:var(--coral)] text-[#fff] inter font-medium rounded-xl px-3 py-1 mt-5 '>Mes services <Image src={arrowRight} alt="flèche droite" width={30} /></button>
          </Link>
          <Link href="#a-propos">
            <p className='pt-5 inter font-medium opacity-80 underline underline-offset-4'>En savoir plus</p>
          </Link>
        </div>
      
      </div>
      <Image src={arrow} alt="flèche en point tillé" className='w-0 absolute right-0 top-0 mt-56 sm:w-auto ' />
    </div>
  )
}