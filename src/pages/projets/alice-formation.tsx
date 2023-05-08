import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'

import alice1 from '../../../assets/alice1.png'
import alice2 from '../../../assets/alice2.png'
import alice3 from '../../../assets/projects/alice-ebook.png'

type Props = {}

export default function aliceFormation({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>
            <Image src={alice1} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
           
            <p className='mb-8 md:w-3/4 md:m-auto'>Alice Formation est un site que j&rsquo;ai d&eacute;velopp&eacute; pour une cliente qui souhaite publier des articles de blog sur les diff&eacute;rents m&eacute;tiers du web et aider les gens &agrave; trouver les m&eacute;tiers qui leurs conviennent.</p>

            <p className='mb-8 md:w-3/4 md:m-auto'>Le design et l&rsquo;agencement du site ont &eacute;t&eacute; pens&eacute; par ma personne de A &agrave; Z, le site a &eacute;t&eacute; int&eacute;gr&eacute; avec le CMS &agrave; Sanity afin de permettre &agrave; ma cliente d&rsquo;ajouter des articles facilement.</p>

            <p className='mb-8 md:w-3/4 md:m-auto'>Chaque article est rang&eacute; dans une cat&eacute;gorie pour une meilleure exp&eacute;rience utilisateur.</p>
            <Image src={alice2} className='w-100 md:w-1/2 m-auto my-5' alt="espace sportelia" />
            
            <p className='mb-8 md:w-3/4 md:m-auto'>Ma cliente souhaitait cr&eacute;er un lien avec les visiteurs de son site web, nous avons donc cr&eacute;er la possibilit&eacute; &agrave; l&rsquo;utilisateur de recevoir l&rsquo;e-book de Alice Formation en entrant son nom et son email.</p>

            <p className='mb-8 md:w-3/4 md:m-auto'>Le visiteur re&ccedil;oit donc le lien vers son e-book et ma cliente r&eacute;cup&egrave;re ces emails afin de mener des campagnes d&rsquo;emailing.</p>

            <Image src={alice3} className='w-100 md:w-1/2 m-auto my-5' alt="espace sportelia" />
            
        </div>
    </Layout>
  )
}