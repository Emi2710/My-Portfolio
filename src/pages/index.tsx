import Head from 'next/head'
import Image from 'next/image'
import About from '../../components/About'
import BlogIntro from '../../components/BlogIntro'
import Contact from '../../components/Contact'
import Feedback from '../../components/Feedback'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Projects from '../../components/Projects'
import Services from '../../components/Services'


export default function Home() {
  return (
    <>
      <Head>
        <title>Emilie's portfolio.</title>
        
      </Head>
      <main>
        <div>
          <Navbar />
        </div>

        <header>
          <Hero />
        </header>

        <section id="a-propos">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projets">
          <Projects />
        </section>

        <section>
          <Feedback />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <aside id="blog">
          <BlogIntro />
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
