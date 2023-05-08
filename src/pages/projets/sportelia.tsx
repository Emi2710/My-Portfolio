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
        
        <p className='mb-8 md:w-3/4 md:m-auto'>J&apos;ai d&eacute;velopp&eacute; une application web de gestion de franchises sportives pour les propri&eacute;taires de marques de sport qui cherchent &agrave; optimiser la gestion de leurs franchises. Cette application permet aux propri&eacute;taires de marques de sport d&apos;ajouter facilement de nouvelles franchises en quelques clics seulement, et de g&eacute;rer leurs droits d&apos;acc&egrave;s &agrave; l&apos;application.</p>
        <Image src={sportelia1} className='w-100 md:w-1/2 m-auto' alt="écran de connexion sportelia" />
        
        <p className='mb-8 md:w-3/4 md:m-auto'>La gestion des franchises est simplifi&eacute;e gr&acirc;ce &agrave; des tableaux de bord personnalisables. L&apos;application permet &eacute;galement une gestion fine des droits d&apos;acc&egrave;s, permet d&eacute;finir les modules auxquels chaque utilisateur a acc&egrave;s et m&ecirc;me restreindre certains acc&egrave;s en fonction du r&ocirc;le ou de la position dans la franchise.</p>
        <Image src={sportelia2} className='w-100 md:w-1/2 m-auto pb-16 mt-3' alt="écran de connexion sportelia" />
       
        <p className='mb-8 md:w-3/4 md:m-auto'>Je suis consciente que chaque entreprise a des exigences particuli&egrave;res, c&apos;est pourquoi je propose mes services pour cr&eacute;er une solution adapt&eacute;e &agrave; vos besoins. J&apos;essaie d'&ecirc;tre &agrave; l&apos;&eacute;coute de ceux qui se tournent vers moi et de respecter la confiance qu&apos;ils ont eu en moi.</p>
      </div>
      
    </Layout>
  )
}