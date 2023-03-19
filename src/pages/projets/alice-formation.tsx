import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'

import alice1 from '../../../assets/alice1.png'
import alice2 from '../../../assets/alice2.png'

type Props = {}

export default function aliceFormation({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>
            <p>Alice Formation est un site que j&apos;ai d&eacute;velopp&eacute; pour aider ma cliente &agrave; guider les personnes int&eacute;ress&eacute;es par les m&eacute;tiers du web et leur faire d&eacute;couvrir les diff&eacute;rentes opportunit&eacute;s qui existent dans ce domaine.</p>
            <Image src={alice1} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
           
            <p>En tant que d&eacute;veloppeuse web, j&apos;ai mis &agrave; profit mes comp&eacute;tences pour cr&eacute;er un site qui offre une exp&eacute;rience utilisateur fluide et intuitive. J&apos;y ai int&eacute;gr&eacute; un syst&egrave;me de gestion de contenu pour aider Alice &agrave; publier facilement ses articles, les g&eacute;rer et les modifier &agrave; tout moment. <span>Il est possible de parcourir les articles par cat&eacute;gories et par mots-cl&eacute;s pour trouver des informations sur les m&eacute;tiers qui int&eacute;ressent le visiteur du site.</span></p>
            <Image src={alice2} className='w-100 md:w-1/2 m-auto my-5' alt="écran de connexion sportelia" />
            
            <p>J&apos;ai &eacute;galement veill&eacute; &agrave; ce que le site soit facilement accessible sur tous les types d&apos;appareils, notamment les smartphones et les tablettes. Cela signifie que les visiteurs peuvent acc&eacute;der &agrave; notre contenu o&ugrave; qu&apos;ils se trouvent, &agrave; tout moment de la journ&eacute;e.</p>
            <p className='mt-8'>Je suis passionn&eacute; par le d&eacute;veloppement web et j&apos;ai &agrave; c&oelig;ur de cr&eacute;er des sites qui sont &agrave; la fois fonctionnels et esth&eacute;tiques. J&apos;ai donc travaill&eacute; dur pour concevoir un site qui est &agrave; la fois pratique et &eacute;l&eacute;gant. J&apos;ai utilis&eacute; les derni&egrave;res technologies pour m'assurer que le site est rapide et r&eacute;actif, ce qui permet une exp&eacute;rience utilisateur fluide.</p>
            <p className='mt-8'>Je suis fi&egrave;re de ce que j&apos;ai r&eacute;alis&eacute; avec Alice Formation et je suis heureuse de voir que le site est utile pour les visiteurs qui cherchent des informations sur les m&eacute;tiers du web. Si vous cherchez un d&eacute;veloppeur web qualifi&eacute; pour votre prochain projet, n&apos;h&eacute;sitez pas &agrave; me contacter pour en savoir plus sur mes comp&eacute;tences et mon exp&eacute;rience.</p>
        </div>
    </Layout>
  )
}