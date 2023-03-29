import React from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 bg-mantle flex p-4 w-full justify-between md:justify-center content-baseline shadow-md text-sm'>
      <a
        href='https://github.com/Virkkunen'
        target='_blank'
        rel='noopener noreferrer'
        className='flex content-center hover:text-lavender active:text-opacity-60 ease-in-out duration-200 mx-8 md:mx-32'
      >
        <FaGithub size='16px' className='mx-2 my-auto' />
        @Virkkunen
      </a>
      <a
        href='https://github.com/Virkkunen/weather'
        target='_blank'
        rel='noopener noreferrer'
        className='flex content-center hover:text-lavender active:text-opacity-60 ease-in-out duration-200 mx-8 md:mx-32'
      >
        <FaCode size='16px' className='mx-2 my-auto' />
        source
      </a>
    </footer>
  );
};

export default Footer;
