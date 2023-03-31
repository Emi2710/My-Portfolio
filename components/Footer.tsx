import React from 'react'


type Props = {}

export default function Footer({}: Props) {
  return (
    <div>
      <div className='inter flex justify-between items-center py-5 bg-black text-white'>
        <p className='text-xs md:text-base pl-5 opacity-80'>@ Tout droit réservé</p>
        
      </div>
    </div>
  )
}