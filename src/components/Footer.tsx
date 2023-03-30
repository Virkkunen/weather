import { FaCode, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 bg-crust text-subtext0 flex p-4 w-full justify-between content-baseline shadow-md text-sm md:relative md:row-start-3 md:rounded-lg md:flex md:flex-row md:justify-evenly md:p-4 md:w-1/2 md:mx-auto md:shadow-lg'>
      <a
        href='https://github.com/Virkkunen'
        target='_blank'
        rel='noopener noreferrer'
        className='flex content-center hover:text-lavender active:text-opacity-60 ease-in-out duration-200 mx-8 font-bold'
      >
        <FaGithub size='16px' className='mx-2 my-auto' />
        @Virkkunen
      </a>
      <a
        href='https://github.com/Virkkunen/weather'
        target='_blank'
        rel='noopener noreferrer'
        className='flex content-center hover:text-lavender active:text-opacity-60 ease-in-out duration-200 mx-8 font-bold'
      >
        <FaCode size='16px' className='mx-2 my-auto' />
        source
      </a>
    </footer>
  );
};

export default Footer;