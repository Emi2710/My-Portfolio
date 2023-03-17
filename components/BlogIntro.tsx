import React from 'react'

type Props = {}

export default function ({}: Props) {
  return (
    <div className='bg-black z-10 my-12 md:flex justify-between'>
      <div className='py-3'>
        <p className='inter gradient uppercase font-bold sm:text-md md:text-lg tracking-widest pl-3 pt-5 md:pl-14 mt-9'>blog</p>
        <h3 className='jakarta font-bold text-2xl md:text-4xl pt-5 pl-3 md:pl-14 text-white'>Derniers articles</h3>
        <p className='text-white jakarta sm:text-md md:text-lg pl-3 md:pl-14 pt-5 underline pb-5'>Voir tout</p> 
      </div>
      <div className='md:p-16'>

        <div className='md:py-8 mt-5 mx-3'>
          <div className='text-white pb-5'>
              <p className='inter opacity-80'>10 mars 2021 • 6 min</p>
              <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Est-il important d'avoir un site web en 2023 ?</h4>
              <p className='inter underline pt-5'>Lire l'article</p>
          </div>
          <hr className=' m-auto opacity-40'/>
        </div>

        <div className='md:py-8 m-3'>
          <div className='text-white pb-5'>
              <p className='inter opacity-80'>10 mars 2021 • 6 min</p>
              <h4 className='jakarta font-bold text-xl md:text-2xl pt-5 text-white'>Est-il important d'avoir un site web en 2023 ?</h4>
              <p className='inter underline pt-5'>Lire l'article</p>
          </div>
          <hr className=' m-auto opacity-40'/>
        </div>  
      </div>
      
    </div>
  )
}