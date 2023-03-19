import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'
import gericht1 from '../../../assets/gericht1.png'
import gericht2 from '../../../assets/gericht2.png'
import gericht3 from '../../../assets/gericht3.png'
import gericht4 from '../../../assets/gericht4.png'



type Props = {}

export default function ({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>

            <p>Gericht est un site vitrine que j&apos;ai eu le plaisir de d&eacute;velopper. J&apos;ai essay&eacute; de concevoir une plateforme en ligne pratique et d&eacute;taill&eacute;e pour les clients potentiels avec un design plaisant.</p>
            <Image src={gericht3} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
    
            <p className='mb-5'>L&apos;objectif principal &eacute;tait de fournir aux clients toutes les informations dont ils ont besoin sur le restaurant, y compris des d&eacute;tails sur son emplacement, ses heures d'ouverture et ses coordonn&eacute;es, tout en leur offrant un aper&ccedil;u de son menu savoureux. Nous avons donc cr&eacute;&eacute; un syst&egrave;me de navigation simple et intuitif pour aider les clients &agrave; trouver facilement ce qu&apos;ils cherchent.</p>
            <p>Le menu du restaurant est l'une des principales attractions pour les clients, c'est pourquoi nous avons travaill&eacute; en &eacute;troite collaboration avec le chef pour cr&eacute;er une section d&eacute;di&eacute;e &agrave; son menu. Nous avons con&ccedil;u une pr&eacute;sentation attractive pour chaque plat et chaque boisson, accompagn&eacute;e de descriptions d&eacute;taill&eacute;es pour aider les clients &agrave; faire leur choix.</p>
            <Image src={gericht4} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
           
            <p>En outre, nous avons ajout&eacute; des images de haute qualit&eacute; pour donner aux clients un aper&ccedil;u visuel des plats et des boissons qu&apos;ils peuvent commander. Toutes les informations de contact ont &eacute;t&eacute; ajout&eacute;es pour permettre au visiteur du site afin de les contacter pour r&eacute;server une table. Sur demande, une fonctionnalit&eacute; de r&eacute;servation en ligne peut &ecirc;tre rajout&eacute;e &agrave; tout moment.</p>
            <p>En tant que d&eacute;veloppeur web professionnel, j&apos;ai travaill&eacute; dur pour m'assurer que le site est convivial, rapide et s&eacute;curis&eacute; pour les clients. Le site est en accord avec le charte graphique du restaurant.</p>

            <Image src={gericht1} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
            <Image src={gericht2} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
        </div>
    </Layout>
  )
}