import { FaCode, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 bg-crust text-subtext0 flex p-4 max-md:w-full justify-between content-baseline shadow-md text-sm md:container md:mx-10 md:justify-center md:row-start-6 md:rounded-t-lg 2xl:relative 2xl:row-start-3 2xl:rounded-lg 2xl:flex 2xl:flex-row 2xl:justify-evenly 2xl:p-4 2xl:w-1/2 2xl:mx-auto 2xl:shadow-lg'>
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
