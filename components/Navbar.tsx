import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburger from '../assets/hamburger.svg';
import logo from '../assets/Logo.png';

type Props = {}

export default function Navbar({}: Props) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className=''>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="jakarta text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-black"
              href="/#"
            >
              Emilie T.
              {/*<Image src={logo} alt="Logo lettre E"  width={25}/>*/}
            </Link>
            <div
              className="text-white cursor-pointer text-xl leading-none p-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src={hamburger} alt="icone de navigation" width={25} className="" />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto opacity-80 inter">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center font-semibold leading-snug hover:opacity-75 duration-75"
                  href="/#projets"
                >
                  <span className="ml-2">Projets</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center font-semibold leading-snug hover:opacity-75 duration-75"
                  href="/#a-propos"
                >
                  <span className="ml-2">À propos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center font-semibold leading-snug hover:opacity-75 duration-75"
                  href="/#services"
                >
                  <span className="ml-2">Services</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center font-semibold leading-snug hover:opacity-75 duration-75"
                  href="/#blog"
                >
                  <span className="ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center font-semibold leading-snug hover:opacity-75 duration-75"
                  href="/#contact"
                >
                  <span className="ml-2 underline">Réserver un appel</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    
  )
}