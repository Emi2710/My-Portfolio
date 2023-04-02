import React from 'react'
import { sanityClient } from '../client/sanity';
import Link from 'next/link';

import { motion } from 'framer-motion'
import { PostsIntro } from '../typings';


type Props = {
  blogIntro: PostsIntro[];
}


export default function BlogIntro({blogIntro}: Props) {

  
  

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
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2}}

      className='bg-black z-10 my-12 md:flex justify-between'
    
    >
      <motion.div className='py-3 md:w-1/3' variants={textAnimation} custom={2}>
        <p className='inter gradient uppercase font-bold text-xl tracking-widest pl-3 pt-5 md:pl-14 mt-9'>blog</p>
        <h3 className='jakarta font-bold text-3xl  pt-5 pl-3 md:pl-14 text-white w-100 min-w-full pb-5'>Derniers articles</h3>
        <Link href="/blog" className='text-white jakarta sm:text-md md:text-lg pl-3 md:pl-14 pt-5 underline pb-5 pt-5'>Voir tout</Link>
      </motion.div>
      
      <motion.div className='md:p-16' variants={textAnimation} custom={3}>

        {blogIntro?.map((post) => (
          <div key={post._id}>
            {post?.references?.map((reference) => (
              <div key={reference.slug.current}>
                <Link href={`/blog/${reference.slug.current}`}>

                  <div className='md:py-8 m-3 md:w-2/3 md: md:ml-auto '>
                    <motion.div whileHover={{ scale: 1.03 }} className='text-white pb-5'>
                        <p className='inter opacity-80'>{reference.publishedAt}</p>
                        <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>{reference.title}</h4>
                        <p className='inter underline pt-5'>Lire l&apos;article</p>
                    </motion.div>
                    <hr className=' m-auto opacity-40'/>
                  </div>    
                </Link>  
              </div>
              
            
                ))}
          </div>
            ))}

            {/*<Link href={`/blog/les-etapes-cruciales-du-developpement-de-votre-site-web-du-plan-initial-au-lancement-reussi`}>

                  <div className='md:py-8 m-3 md:w-2/3 md: md:ml-auto '>
                    <motion.div whileHover={{ scale: 1.03 }} className='text-white pb-5'>
                        <p className='inter opacity-80'>5 minutes</p>
                        <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Les étapes cruciales du développement de votre site web : du plan initial au lancement réussi</h4>
                        <p className='inter underline pt-5'>Lire l&apos;article</p>
                    </motion.div>
                    <hr className=' m-auto opacity-40'/>
                  </div>    
            </Link>  

            <Link href={`/blog/comprendre-les-couts-de-developpement-de-site-web`}>

                  <div className='md:py-8 m-3 md:w-2/3 md: md:ml-auto '>
                    <motion.div whileHover={{ scale: 1.03 }} className='text-white pb-5'>
                        <p className='inter opacity-80'>3 minutes</p>
                        <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Comprendre les coûts de développement : Ce que vous devez savoir avant de créer votre site Web</h4>
                        <p className='inter underline pt-5'>Lire l&apos;article</p>
                    </motion.div>
                    <hr className=' m-auto opacity-40'/>
                  </div>    
            </Link> 

            <Link href={`/blog/les-10-meilleurs-outils-analytiques-et-marketing-pour-ameliorer-votre-site-web`}>

                  <div className='md:py-8 m-3 md:w-2/3 md: md:ml-auto '>
                    <motion.div whileHover={{ scale: 1.03 }} className='text-white pb-5'>
                        <p className='inter opacity-80'>2 minutes</p>
                        <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Les 10 meilleurs outils analytiques et marketing pour améliorer votre site web</h4>
                        <p className='inter underline pt-5'>Lire l&apos;article</p>
                    </motion.div>
                    <hr className=' m-auto opacity-40'/>
                  </div>    
            </Link> 

            <Link href={`/blog/les-meilleures-pratiques-pour-un-site-web-de-qualite-et-augmenter-votre-visibilite-en-ligne`}>

                  <div className='md:py-8 m-3 md:w-2/3 md: md:ml-auto '>
                    <motion.div whileHover={{ scale: 1.03 }} className='text-white pb-5'>
                        <p className='inter opacity-80'>4 minutes</p>
                        <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Les meilleures pratiques pour un site web de qualité et augmenter votre visibilité en ligne</h4>
                        <p className='inter underline pt-5'>Lire l&apos;article</p>
                    </motion.div>
                    <hr className=' m-auto opacity-40'/>
                  </div>    
          </Link>*/} 

                


        
      </motion.div>
      
    </motion.div>
    
  )
}





export async function getServerSideProps() {
  const query = `*[_type == 'post']{
    _id,
    title,
    
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {posts}, // will be passed to the page component as props
    
  }
}