import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

import { sendContactForm } from '../lib/api';

import mail from '../assets/mail.svg'

import { motion } from 'framer-motion'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Text, useToast } from '@chakra-ui/react'
import ContactForm from './ContactForm';

type Props = {}

const initValues = { 
  name: "",
  email: "",
  message: "",
}

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact({}: Props) {

  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({})

  const { values, isLoading, error  } = state;

  
  /*const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')*/
  
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    }
  }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error,
      }));
    }
  }

  return (
    <motion.div className='jakarta text-white p-5 md:flex justify-between' id="contact">
      
      {/*<div className='flex flex-col max-w-sm mb-12'>
          <div className='flex flex-col'>
            <label className='pb-2'>Votre nom</label>
            <input type="text" placeholder='Nom' className='rounded p-2 mb-5 text-black' onChange={e => setName(e.target.value)} value={name} required></input> 
          </div>
        <div className='flex flex-col'>
          <label className='pb-2'>Votre adresse mail</label>
          <input type="text" placeholder='Adresse mail' className='mb-5 rounded p-2 text-black' onChange={e => setEmail(e.target.value)} value={email} required></input> 

          <label className='pb-2' >Dîtes-moi en peu plus sur ce que vous recherchez ?</label>
          <textarea placeholder='Tapez votre message ici' className=' rounded p-2 text-black' rows={6} onChange={e => setMessage(e.target.value)} value={message} required></textarea> 
        </div>
        <div >
          <motion.button whileHover={{ scale: 0.95 }} className='gradient-bg py-2 px-5 rounded mt-3' onClick={ () => handleOnClick()}>Envoyer</motion.button>
          {success && <><p className='mt-2'>Merci, votre message a bien été prit en compte.</p></>}
        </div>
        
  </div>*/}

      {/*<div>

        {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}


        <FormControl isRequired isInvalid={!values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      
        

      <FormControl
        isRequired
        isInvalid={!values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
        
      </div>*/}

      <ContactForm />



      <div className='md:w-1/3 m-auto mt-5'>
        <div className=''>
          <p className='jakarta font-bold text-2xl md:text-3xl'>Emilie T.</p>
          <div className='flex my-5 items-center pb-8'>
            <Image src={mail} alt="icone email" width={25} />
            <a href="mailto:emilie.tkv@hotmail.com" className='text-lg opacity-80 pl-2'>emilie.tkv@hotmail.com</a>
          </div>
        </div>
        <div>
          <ul className='text-lg'>
            <div className='flex justify-between my-5'>
              <Link href="/#projets" className='hover:opacity-80 duration-75'><li>Projets</li></Link>
              <Link href="/#a-propos" className='hover:opacity-80 duration-75'><li>À propos</li></Link>
              <Link href="/#services" className='hover:opacity-80 duration-75'><li>Services</li></Link>   
            </div>
            <div className='flex justify-between my-5'>
              <Link href="/blog" className='hover:opacity-80 duration-75'><li>Blog</li></Link>
              <Link href="/#" className='hover:opacity-80 duration-75'><li>LinkedIn</li></Link>
              <Link href="https://github.com/Emi2710" className='hover:opacity-80 duration-75'><li>Github</li></Link>    
            </div>
            
            
          </ul>
        </div>
      </div>
      
    </motion.div>
  )
}