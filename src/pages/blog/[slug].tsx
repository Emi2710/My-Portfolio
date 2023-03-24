import { GetStaticProps } from 'next';
import React, { useState } from 'react'
import PortableText from 'react-portable-text';
import Layout from '../../../layout/Layout'
import { sanityClient, urlFor } from '../../../client/sanity';
import { Post } from '../../../typings';

import { motion } from 'framer-motion';
import Link from 'next/link';

//import {useForm, SubmitHandler} from 'react-hook-form'


interface Props {
    post: Post;
}
const Post = ({post}: Props) => {
    
  return (
      <Layout>
    
    <article className='jakarta max-w-3xl mx-auto p-5'>
        <h1 className='text-2xl md:text-3xl mt-10 mb-3 font-bold'>{post.title}</h1>
        
        <div className='mt-10 portable-text leading-7 text-lg'>
            <PortableText
             dataset= {process.env.NEXT_PUBLIC_SANITY_DATASET}
             projectId= {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
             content={post.body}
             serializers={{
                 h1: (props: any) => (
                     <h1 className='text-2xl md:text-3xl font-bold my-5' {...props} />
                 ),
                 h2: (props: any) => (
                    <h2 className='text-xl md:text-2xl font-bold my-5' {...props} />
                ),
                li: ({children}: any) => (
                    <li className='ml-4 list-disc'>{children}</li>
                ),
                link: ({href, children}: any) => (
                    <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                ),
                

             }}
            />
        </div>
    </article>
    <aside>
        {post.articlesRelated && <>
        <h4 className='jakarta text-2xl font-bold underline p-5'>Voir également:</h4>
        <motion.div whileHover={{ scale: 1.01 }} className='md:py-8 mt-5 mx-3 p-5'>
            
            <Link href={`/blog/${post.articlesRelated.slug.current}`}>
                
                            <div className='pb-5'>
                              <p className='inter opacity-80'>{post.articlesRelated.publishedAt}</p>
                              <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 max-w-2xl'>{post.articlesRelated.title}</h4>
                              <p className='inter underline pt-5'>Lire l&apos;article</p>
                          </div>
                          <hr className='m-auto'/>

            </Link>
                          
        </motion.div>
        
        
        
        </>}
        
    </aside>
    
    
      </Layout>
  )
}
export async function getStaticPaths() {
    const query = 
    `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`;
      const posts = await sanityClient.fetch(query);

      const paths = posts.map((post : Post) => ({
        params: {
            slug: post.slug.current
        }
      }))
    return {
      paths,
      fallback: 'blocking' // false or 'blocking'
    };
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        body,
        articlesRelated -> {
        publishedAt,
        title,
        slug  {
        current
      },
      }, 
      }
    `
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })
    if(!post){
        return {
            notFound: true
        }
    }
    return {
        props: {
            post,
        },
        revalidate: 60,
    }
}

export default Post