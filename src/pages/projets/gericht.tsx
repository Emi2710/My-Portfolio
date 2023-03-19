import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'
import gericht1 from '../../../assets/gericht1.png'
import gericht2 from '../../../assets/gericht2.png'


type Props = {}

export default function ({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>

            <p>Gericht est un site vitrine que j'ai eu le plaisir de d&eacute;velopper. J'ai essay&eacute; de concevoir une plateforme en ligne pratique et d&eacute;taill&eacute;e pour les clients potentiels avec un design plaisant.</p>
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/654fb34e-dfb6-4233-bd9f-38e5f16d80d2/emi2710.github.io__%282%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230319T114601Z&X-Amz-Expires=86400&X-Amz-Signature=7d02bf203d6ea05335566788d97e45d4d8b842f3039c75a4e6951c1d96582af1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22emi2710.github.io_%2520%282%29.png%22&x-id=GetObject" className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
    
            <p className='mb-5'>L'objectif principal &eacute;tait de fournir aux clients toutes les informations dont ils ont besoin sur le restaurant, y compris des d&eacute;tails sur son emplacement, ses heures d'ouverture et ses coordonn&eacute;es, tout en leur offrant un aper&ccedil;u de son menu savoureux. Nous avons donc cr&eacute;&eacute; un syst&egrave;me de navigation simple et intuitif pour aider les clients &agrave; trouver facilement ce qu'ils cherchent.</p>
            <p>Le menu du restaurant est l'une des principales attractions pour les clients, c'est pourquoi nous avons travaill&eacute; en &eacute;troite collaboration avec le chef pour cr&eacute;er une section d&eacute;di&eacute;e &agrave; son menu. Nous avons con&ccedil;u une pr&eacute;sentation attractive pour chaque plat et chaque boisson, accompagn&eacute;e de descriptions d&eacute;taill&eacute;es pour aider les clients &agrave; faire leur choix.</p>
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2da2f368-d328-4aeb-addd-774d600e8a3d/emi2710.github.io__%283%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230319T114852Z&X-Amz-Expires=86400&X-Amz-Signature=fb3525de2206d11f9d969ff0de829fad63ab0e2e7808128daa0ebdd3c54c77a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22emi2710.github.io_%2520%283%29.png%22&x-id=GetObject" className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
           
            <p>En outre, nous avons ajout&eacute; des images de haute qualit&eacute; pour donner aux clients un aper&ccedil;u visuel des plats et des boissons qu'ils peuvent commander. Toutes les informations de contact ont &eacute;t&eacute; ajout&eacute;es pour permettre au visiteur du site afin de les contacter pour r&eacute;server une table. Sur demande, une fonctionnalit&eacute; de r&eacute;servation en ligne peut &ecirc;tre rajout&eacute;e &agrave; tout moment.</p>
            <p>En tant que d&eacute;veloppeur web professionnel, j'ai travaill&eacute; dur pour m'assurer que le site est convivial, rapide et s&eacute;curis&eacute; pour les clients. Le site est en accord avec le charte graphique du restaurant.</p>

            <Image src={gericht1} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
            <Image src={gericht2} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
        </div>
    </Layout>
  )
}