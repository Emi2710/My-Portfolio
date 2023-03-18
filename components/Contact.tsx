import Image from 'next/image'
import React, { useState } from 'react'

import { sendMail } from '../services/sendMail'

import mail from '../assets/mail.svg'

type Props = {}

export default function Contact({}: Props) {

  /*const [values, setValues] = useState({
    name: '', 
    email:'', 
    message:''})*/
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')
  
  const [success, setSuccess] = useState(false)



  async function handleOnClick (){
    let response = await sendMail(email, name, message);
    console.log(response);

    if (response) {
      setSuccess(true)
      setEmail('')
      setName('')
      setMessage('')

    } else {
      console.log(response)
    }
    
  }

  return (
    <div className='jakarta text-white p-5 md:flex justify-between'>
      
      <div className='flex flex-col max-w-sm mb-12'>
          <div className='flex flex-col'>
            <label className='pb-2'>Votre nom</label>
            <input type="text" placeholder='Nom' className='rounded p-2 mb-5 text-black' onChange={e => setName(e.target.value)} value={name} required></input> 
          </div>
        <div className='flex flex-col'>
          <label className='pb-2'>Votre adresse mail</label>
          <input type="text" placeholder='Adresse mail' className='mb-5 rounded p-2 text-black' onChange={e => setEmail(e.target.value)} value={email} required></input> 

          <label className='pb-2' >Dîtes-moi en peu plus sur ce que vous recherchez ?</label>
          <input type="textarea"placeholder='Tapez votre message ici' className=' rounded px-2 pb-32 pt-2 text-black' onChange={e => setMessage(e.target.value)} value={message} required></input> 
        </div>
        <div>
          <button className='gradient-bg py-2 px-5 rounded mt-3' onClick={ () => handleOnClick()}>Envoyer</button>
          {success && <><p className='mt-2'>Merci, votre message a bien été prit en compte.</p></>}
        </div>
        
      </div>
      <div className='md:w-1/3 m-auto'>
        <div className=''>
          <p className='jakarta font-bold text-2xl md:text-3xl'>Emilie T.</p>
          <div className='flex my-5 items-center pb-8'>
            <Image src={mail} alt="icone email" width={25} />
            <a href="mailto:exemple@gmail.com" className='text-lg opacity-80 pl-2'>emilie@gmail.com</a>
          </div>
        </div>
        <div>
          <ul className='text-lg'>
            <div className='flex justify-between my-5'>
              <li>Projets</li>
              <li>À propos</li>
              <li>Services</li>  
            </div>
            <div className='flex justify-between my-5'>
              <li>Blog</li>
              <li>LinkedIn</li>
              <li>Github</li>  
            </div>
            
            
          </ul>
        </div>
      </div>
      
    </div>
  )
}