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

            <p>Le site e-commerce Escootch. En tant que d&eacute;veloppeuse web, j&apos;ai travaill&eacute; en &eacute;troite collaboration avec le propri&eacute;taire de la boutique pour cr&eacute;er une plateforme en ligne facile &agrave; utiliser, rapide et s&eacute;curis&eacute;e pour les clients.</p>
            <Image src={escootch1} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
            
            <p>Le principal objectif de ce projet &eacute;tait de fournir une exp&eacute;rience de shopping en ligne agr&eacute;able et pratique aux clients qui cherchent des pi&egrave;ces automobiles de haute qualit&eacute; &agrave; des prix comp&eacute;titifs. Pour y parvenir, nous avons int&eacute;gr&eacute; un syst&egrave;me de recherche avanc&eacute; qui permet aux clients de trouver rapidement les pi&egrave;ces qu&apos;ils recherchent en fonction de la marque, du mod&egrave;le, du type de produit.</p>
            <Image src={escootch2} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
            
            <p>En plus de cela, nous avons &eacute;galement mis en place un syst&egrave;me de gestion de compte complet qui permet aux clients de suivre leurs commandes, de g&eacute;rer leurs informations personnelles.&nbsp;</p>
            
            <p>J'ai travaill&eacute; dur pour m'assurer que toutes les fonctionnalit&eacute;s de ce site fonctionnent correctement et que le processus d'achat est fluide et rapide. Nous avons &eacute;galement pris des mesures de s&eacute;curit&eacute; strictes pour garantir que les informations personnelles des clients sont stock&eacute;es en toute s&eacute;curit&eacute; et ne sont pas expos&eacute;es &agrave; des tiers.</p>
            <p>Pour une experience optimale, il a &eacute;t&eacute; ajout&eacute; diff&eacute;rents moyens de paiements : PayPal et Stripe.</p>
            <Image src={escootch3} className='w-100 md:w-1/2 m-auto my-5' alt="photo" />
            <p>Le site a &eacute;t&eacute; integr&eacute; avec un syst&egrave;me de gestion de contenu complet qui permet &agrave; mon client d'ajouter et/ou de supprimer des nouveaux produits ainsi que de les modifier &agrave; tout moment.</p>
            <p>En somme, j&apos;ai travaill&eacute; dur pour cr&eacute;er une plateforme en ligne facile &agrave; utiliser, rapide et s&eacute;curis&eacute;e pour les clients d'Escootch. Je suis fier de ce que nous avons accompli et je suis convaincu que les clients auront une exp&eacute;rience de shopping en ligne agr&eacute;able et pratique lorsqu'ils visiteront ce site.</p>

        </div>
    </Layout>
  )
}