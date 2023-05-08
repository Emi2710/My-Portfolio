import React from 'react'
import Layout from '../../../layout/Layout'

import Image from 'next/image'
import gericht1 from '../../../assets/gericht1.png'
import gericht2 from '../../../assets/gericht2.png'
import gericht3 from '../../../assets/gericht3.png'
import gericht4 from '../../../assets/gericht4.png'



type Props = {}

export default function gericht({}: Props) {
  return (
    <Layout>
        <div className='jakarta py-16 px-5 text-lg leading-9'>

          
          <p className='mb-8 md:w-3/4 md:m-auto'>Gericht est un site vitrine pour restaurant que j&apos;ai d&eacute;velopp&eacute; avec soin, afin de respecter son design moderne et attirant.</p>
          
            <Image src={gericht3} className='w-100 md:w-1/2 m-auto my-5' alt="extrait du site vitrine restaurant gericht" />
            <Image src={gericht4} className='w-100 md:w-1/2 m-auto my-5' alt="extrait du site vitrine restaurant gericht" />
            <Image src={gericht1} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
            <Image src={gericht2} alt="gericht" className='w-100 md:w-1/2 m-auto my-5'/>
        </div>
    </Layout>
  )
}