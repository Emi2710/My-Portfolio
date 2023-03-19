import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import alice from '../assets/projects/aliceformation.png';
import escoot from '../assets/projects/escoot.png';
import gericht from '../assets/projects/gericht.png';
import sportelia from '../assets/projects/sportelia.png';



type Props = {}

export default function Projects({}: Props) {
  return (
    <div className=''>
      <p className='inter gradient uppercase font-bold text-xl tracking-widest pl-3 md:pl-14 mt-9'>projets</p>
      <h3 className='jakarta font-bold text-3xl md:text-4xl pt-6 pl-3 md:pl-14'>J&apos;apporte des résultats.</h3>
      <div className='px-3 my-10'>
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

          breakpoints={{
          800: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
          
        >

          <SwiperSlide>
            <Link href="projets/sportelia">
              <div className='md:flex  flex-col items-center justify-center  z-20 '>
                <Image src={sportelia} alt="Sportelia" className='py-3 height' />
                <div className='jakarta'> 
                  <p className='inter gradient uppercase font-bold sm:text-md tracking-widest p-3'>Gestion</p>
                  <p className='text-xl font-bold p-3'>Développement outil de gestion en ligne</p>
                  <p className='p-3 underline'>Voir le projet</p>
                </div>
              </div>  
            </Link>
            
          </SwiperSlide>

          <SwiperSlide>
            <Link href="projets/alice-formation">
              <div className='md:flex  flex-col items-center justify-center  z-20 '>
                <Image src={alice} alt="Sportelia" className='py-3 height' />
                <div className='jakarta'> 
                  <p className='inter gradient uppercase font-bold sm:text-md tracking-widest p-3'>blog</p>
                  <p className='text-xl font-bold p-3'>Alice formation, blog sur les métiers du web</p>
                  <p className='p-3 underline'>Voir le projet</p>
                </div>
              </div>  
            </Link>
            
          </SwiperSlide>

          <SwiperSlide>
            <Link href="projets/escootch">
              <div className='md:flex  flex-col items-center justify-center  z-20 '>
                <Image src={escoot} alt="Sportelia" className='py-3 height' />
                <div className='jakarta'> 
                  <p className='inter gradient uppercase font-bold sm:text-md tracking-widest p-3'>e-commerce</p>
                  <p className='text-xl font-bold p-3'>Escootch : site e-commerce spécialisé dans les pièces auto</p>
                  <p className='p-3 underline'>Voir le projet</p>
                </div>
              </div>  
            </Link>
            
          </SwiperSlide>

          <SwiperSlide>
            <Link href="projets/gericht">
              <div className='md:flex  flex-col items-center justify-center  z-20 '>
                <Image src={gericht} alt="Sportelia" className='py-3 height' />
                <div className='jakarta'> 
                  <p className='inter gradient uppercase font-bold sm:text-md tracking-widest p-3'>vitrine</p>
                  <p className='text-xl font-bold p-3'>Site vitrine avec menu pour le restaurant Gericht</p>
                  <p className='p-3 underline'>Voir le projet</p>
                </div>
              </div>  
            </Link>
            
          </SwiperSlide>

          
          
          
        </Swiper>  
      </div>
      

      
    </div>
  )
}