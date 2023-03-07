import React from 'react';
import Image from 'next/image';

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

import waves from '../assets/waves.png';


type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='bg-[color:var(--dark-rose)]'>
      <h3 className='baskerville font-bold text-2xl pt-8 text-center opacity-80'>Quelques uns de mes projets</h3>
      <Image src={waves} alt="élément décoratif en forme de vagues" className='w-100 m-auto pt-3 md:p-0 md:h-3 h-6'/>

      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        

        
      >

        <SwiperSlide>
          <div className='md:flex items-center justify-center p-8'>
            <Image src={sportelia} alt="Sportelia" className='md:w-1/3' />
            <div className='inter opacity-80'> 
              <p className='text-xl font-bold'>Outil de gestion en ligne</p>
              <div> 
                <ul className='list-disc flex py-3 font-medium'>
                  <li className='ml-6'>Développement</li>
                  <li className='ml-6'>UI Design</li>
                </ul>
                  <p className='text-sm md:text-base'>
                    Sportelia est un outil de gestion de franchises de salle de sport.<br /> Il permet au propriétaire de gérer les droits d'accès de ses franchises. 
                  </p>
                  <p className='text-sm pt-2 md:text-base'>
                    C'est une application web sécurisée développée entièrement par mes soins.
                  </p> 
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='md:flex items-center justify-center p-8'>
            <Image src={alice} alt="Sportelia" className='md:w-1/3' />
            <div className='inter opacity-80'> 
              <p className='text-xl font-bold'>Alice Formation</p>
              <div>
                <ul className='list-disc flex py-3 font-medium'>
                  <li className='ml-6'>Développement</li>
                  <li className='ml-6'>UI Design</li>
                </ul>
                  <p className='text-sm md:text-base'>
                    Le design ainsi que le développement a été pensé et fait de A à Z,<br /> charte graphique élaborée par ma personne en accord avec les goûts du client. 
                  </p>
                  <p className='text-sm pt-2 md:text-base'>
                    Intégré avec un système de gestion de contenu pour la cliente.
                  </p> 
                
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='md:flex items-center justify-center p-8'>
            <Image src={escoot} alt="Sportelia" className='md:w-1/3' />
            <div className='inter opacity-80'> 
              <p className='text-xl font-bold'>Escootch E-commerce</p>
              <div>
                <ul className='list-disc flex py-3 font-medium'>
                  <li className='ml-6'>Développement</li>
                  <li className='ml-6'>UI Design</li>
                </ul>
                  <p className='text-sm md:text-base'>
                    E-Scootch est un site e-commerce spécialisé dans les pièces auto.<br /> Le site a été intégré avec un système de gestion contenu moderne. 
                  </p>
                  <p className='text-sm pt-2 md:text-base'>
                    Le site a été développé en sorte de permettre au client de le personnaliser au maximum.
                  </p> 
                
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='md:flex items-center justify-center p-8'>
            <Image src={gericht} alt="Sportelia" className='md:w-1/3' />
            <div className='inter opacity-80'> 
              <p className='text-xl font-bold'>Gericht Restaurant</p>
              <div>
                <ul className='list-disc flex py-3 font-medium'>
                  <li className='ml-6'>Développement</li>
                  <li className='ml-6'>UI Design</li>
                </ul>
                  <p className='text-sm md:text-base'>
                    Moderne et intuitif, Gericht est un site vitrine pour restaurant.<br /> Il permet au client de consulter les cartes de menus du restaurant. 
                  </p>
                  <p className='text-sm pt-2 md:text-base'>
                    Ce site crée un lien de proximité entre le restaurant et ses clients en <br />partageant leurs coulisses.
                  </p> 
                
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      
    </div>
  )
}