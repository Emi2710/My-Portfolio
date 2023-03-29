import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {sanityClient, urlFor} from '../../client/sanity'
import { Post } from '../../typings'

interface Props {
  props;
}

export default function Articles({}: Props) {
  return (
    <div>
        {/*<div className='md:py-8 mt-5 mx-3'>
            <div className='pb-5'>
                <p className='inter opacity-80'>10 mars 2021 • 6 min</p>
                <h4 className='jakarta font-bold text-xl md:text-2xl pt-5'>Est-il important d&apos;avoir un site web en 2023 ?</h4>
                <p className='inter underline pt-5'>Lire l&apos;article</p>
            </div>
            <hr className='m-auto'/>
  </div>*/}

      
    </div>
  )
}

