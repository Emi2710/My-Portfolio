import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'

import sportelia1 from '../../../assets/sportelia1.png'
import sportelia2 from '../../../assets/sportelia2.png'

type Props = {}

export default function sportelia({}: Props) {
  return (
    <Layout>
      <div className='jakarta py-16 px-5 text-lg leading-9'>
        
        <p className='mb-8'>J&apos;ai d&eacute;velopp&eacute; une application web de gestion de franchises sportives pour les propri&eacute;taires de marques de sport qui cherchent &agrave; optimiser la gestion de leurs franchises. Cette application permet aux propri&eacute;taires de marques de sport d&apos;ajouter facilement de nouvelles franchises en quelques clics seulement, et de g&eacute;rer leurs droits d&apos;acc&egrave;s &agrave; l&apos;application.</p>
        <Image src={sportelia1} className='w-100 md:w-1/2 m-auto' alt="écran de connexion sportelia" />
        
        <p className='mb-8'>La gestion des franchises est simplifi&eacute;e gr&acirc;ce &agrave; des tableaux de bord personnalisables. Vous pouvez suivre facilement l&apos;activit&eacute; de chaque franchise et analyser les performances de vos structures en temps r&eacute;el. Notre application permet &eacute;galement une gestion fine des droits d&apos;acc&egrave;s, vous pouvez d&eacute;finir les modules auxquels chaque utilisateur a acc&egrave;s et m&ecirc;me restreindre certains acc&egrave;s en fonction de son r&ocirc;le ou de sa position dans la franchise.</p>
        <Image src={sportelia2} className='w-100 md:w-1/2 m-auto pb-16' alt="écran de connexion sportelia" />
       
        <p className='mb-8'>Nous sommes conscients que chaque entreprise a des exigences particuli&egrave;res, c&apos;est pourquoi notre application est &eacute;volutive et peut &ecirc;tre personnalis&eacute;e selon vos besoins sp&eacute;cifiques. Si vous avez des exigences particuli&egrave;res pour votre marque de sport, nous sommes l&agrave; pour vous aider &agrave; d&eacute;velopper une solution sur mesure.</p>
        <p className='mb-8'>En somme, notre application web de gestion de franchises sportives est l&apos;outil id&eacute;al pour les propri&eacute;taires de marques de sport qui cherchent &agrave; optimiser la gestion de leurs franchises. Avec une interface simple et intuitive, une s&eacute;curit&eacute; renforc&eacute;e, une gestion fine des droits d&apos;acc&egrave;s et des tableaux de bord personnalisables, notre application est la solution id&eacute;ale pour les marques de sport qui cherchent &agrave; se d&eacute;velopper et &agrave; prosp&eacute;rer.</p>  
      </div>
      
    </Layout>
  )
}