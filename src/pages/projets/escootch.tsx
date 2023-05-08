import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'

import escootch1 from '../../../assets/escootch1.png'
import escootch2 from '../../../assets/escootch2.png'
import escootch3 from '../../../assets/escootch3.png'


type Props = {}

export default function escootch({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>

            <p className='mb-8 md:w-3/4 md:m-auto'>E-Scoot est un site e-commerce que j&rsquo;ai d&eacute;velopp&eacute; avec NextJs pour un client. Le site a &eacute;t&eacute; int&eacute;gr&eacute; avec un syst&egrave;me de gestion de contenu (Sanity) pour permettre au propri&eacute;taire de facilement ajouter des articles et/ou des sections au site.</p>

            <p className='mb-8 md:w-3/4 md:m-auto'>Les articles peuvent &ecirc;tre tri&eacute;s en fonction de leur cat&eacute;gorie, leur marque, leur prix ainsi que leurs avis. Une barre de recherche a &eacute;t&eacute; &eacute;galement int&eacute;gr&eacute;e pour le confort de l&rsquo;utilisateur.</p>
            <Image src={escootch1} className='w-100 md:w-1/2 m-auto my-5' alt="extrait du site e-scootch" />
            
            <Image src={escootch2} className='w-100 md:w-1/2 m-auto my-5' alt="extrait du site e-scootch" />
            
            <p className='mb-8 md:w-3/4 md:m-auto'>J&rsquo;ai d&eacute;velopp&eacute; pour le site un syst&egrave;me d&rsquo;authentification afin que l&rsquo;utilisateur puisse cr&eacute;er un compte et se connecter &agrave; son espace, passer des commandes et visualiser ses commandes actuelles et pass&eacute;es et diff&eacute;rents modes de paiement.</p>

            <Image src={escootch3} className='w-100 md:w-1/2 m-auto my-5' alt="extrait du site e-scootch" />
           

        </div>
    </Layout>
  )
}