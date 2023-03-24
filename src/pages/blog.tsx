import React from 'react'
import Layout from '../../layout/Layout'

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {sanityClient, urlFor} from '../../client/sanity'
import { Post } from '../../typings'

import {  motion } from 'framer-motion'

interface Props {
  posts : [Post];
}



export default function blog({posts}: Props) {

  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { duration: custom * 0.2}
    }),
  }

  return (
    <Layout>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
      >
        <motion.div className='md:p-16' variants={textAnimation} custom={3}>

          <div>
            {posts.map((post) => {
              return <Link href={`/blog/${post.slug.current}`} key={post._id}>
                  <motion.div whileHover={{ scale: 1.03 }} className='md:py-8 mt-5 mx-3'>
                          <div className='pb-5'>
                              <p className='inter opacity-80'>{post.publishedAt}</p>
                              <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 max-w-2xl'>{post.title}</h4>
                              <p className='inter underline pt-5'>Lire l&apos;article</p>
                          </div>
                          <hr className='m-auto'/>
                </motion.div>
                </Link>
              })}
          </div>
        </motion.div>
      </motion.div>
      

    </Layout>
  )
}


export async function getServerSideProps() {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    publishedAt,
    
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {posts}, // will be passed to the page component as props
  }
}