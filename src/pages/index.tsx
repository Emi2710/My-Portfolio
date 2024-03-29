
import Head from 'next/head'
import About from '../../components/About'
import BlogIntro from '../../components/BlogIntro'
import Contact from '../../components/Contact'
import Education from '../../components/Education'
import Feedback from '../../components/Feedback'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Projects from '../../components/Projects'
import Services from '../../components/Services'



import React from "react"
import Faq from "react-faq-component"


import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { PostsIntro } from '../../typings'
import { fetchBlogIntro } from '../../utils/fetchBlogIntro'


type Props = {
  blogIntro: PostsIntro[]
}

interface PropTypes {
    data: {
        title: string,
        rows: [{
            title: string,
            content: string
        }]
    },
    styles: any,
    
}

const data = {
    rows: [
        {
            title: "Quels types de projets acceptez-vous ?",
            content: `Après discussion avec le client, si le produit demandé rentre dans mon arc de compétence, j'accepte le travail.
                      Je n'accepte que les projets dont je suis certaine de pouvoir les fournir à la hauteur des attentes du client.
                      J'ai jusque là pu développer différents types de sites, nottamment des sites vitrines, e-commerce, blog etc..
            `,
        },
        {
            title: "Quel est le délai moyen pour un projet ?",
            content:
                "Cela dépendra du travail que demandera le développement du site en question ainsi que le délai voulu par le client. Naturellement, j'accèlere le développement des sites qui doivent être prêts pour un délai plus court.",
        },
        {
            title: "Quels sont vos tarifs à l'heure ?",
            content: `Je ne charge pas à l'heure. Je charge en fonction de la charge de travail demandé ainsi que la plus value que le site va apporter.
            Les frais sont différents pour chaque projet et j'essaie également de prendre en compte la situation du client afin de pouvoir lui apporter une solution personnalisée et adaptée à ses besoins.
            `,
        },
        {
            title: "Que faire si j'ai besoin d'une modification après que le site ait été livré ?",
            content: "Même une fois le site livré, j'essaie de garder un suivi minimum pour répondre à toute question ou résoudre tout problème. Ainsi, pour ce qui est des modifications après livraison du site, je fais une modification gratuite (cela dépend de la modification en question)."
        },
    ],
  
}

const styles = {
    bgColor: 'black',
    titleTextColor: "#B2B2B2",
    rowTitleColor: "white",
    rowContentColor: '#B2B2B2',
    arrowColor: "#B2B2B2",
    rowContentPaddingTop:'15px',
    rowContentPaddingBottom:'15px',
    rowContentPaddingLeft:'15px',
    rowContentPaddingRight:'15px',

}

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
}


const Home = ({blogIntro}: Props) => {

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
    <>
        <Head>
          <title>Votre site web, conçu sur mesure - Faites appel à une développeuse web professionnelle</title>
          <meta name="description" content="En tant que développeuse web professionnelle, je conçois des sites web personnalisés pour vous aider dans vos projets. Je travaille avec vous pour créer une expérience utilisateur engageante et intuitive. Contactez-moi pour discuter de votre prochain projet en ligne." />
          

        </Head>
        <main>
          <div className='h-screen'>
            <div className=''>
              <Navbar />
            </div>

            <header className=''>
              <Hero />
            </header> 
          </div>
          
          <section id="services">
            <Services />
          </section>


          <section id="projets">
            <Projects />
          </section>

          <aside id="blog">
            <BlogIntro /*blogIntro={blogIntro}*/ />
  </aside>
          
          <section id="a-propos">
            <About />
          </section>

          <section>
            <Education />
          </section>
          

          

          <section>
            <Feedback />
          </section>
          
          <section className='mt-16'>
            <div className='bg-black py-12'>
              <div className='p-5'>
                <p className='inter gradient text-center uppercase font-bold text-xl tracking-widest'>faq</p>
                <h2 className='jakarta text-3xl md:text-4xl font-bold text-center pt-6 px-2 m-auto text-white'>Questions posées fréquemment</h2>
              </div>
              <div className='jakarta p-5'>
                <Faq
                  data={data}
                  styles={styles}
                  //config={config}
                />  
              </div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}>
                
                <motion.h2 variants={textAnimation} custom={3} className='jakarta text-3xl md:text-4xl font-bold mt-24 p-5 m-auto text-white'>Prêts à faire décoller votre projet ?<br /><a href="#" className='jakarta gradient font-bold text-3xl md:text-4xl'>Contactez-moi.</a></motion.h2>

              </motion.div>

              <Contact />
            </div>
            
            
          </section>

          

          
        </main>
        <footer>
          <Footer />
        </footer>
      </>

      
    
  )
}

export default Home;


/*export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogIntro: PostsIntro[] = await fetchBlogIntro();

  return {
    props: {
      blogIntro,
    }
  }
}*/