import React from 'react'

type Props = {}

export default function Services({}: Props) {
  return (
    <div>
      <h2 className='baskerville text-2xl md:text-3xl font-bold text-center pt-12 px-2 m-auto'>Ce que je peux faire pour vous</h2>
      <div className='flex justify-center'>
        <ul className='inter opacity-80 px-3 py-10 list-disc ml-5	sm:text-lg'>
          <li className='pb-7'>Développement d’un site web 100% personnalisé de A à Z</li>
          <li className='pb-7'>Refonte et amélioration de votre site web existant</li>
          <li className='pb-7'>Optimisation SEO et intégration d’outils marketing modernes</li>
          <li className='pb-7'>Intégration d’un système de gestion de contenu (CMS)</li>
          <li className='pb-7'>Tout autre service sur demande</li>
        </ul>  
      </div>
     
    </div>
  )
}