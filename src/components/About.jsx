
// import React from 'react';
import Profile from '../assets/faridzaidov.jpeg';
import { AiOutlineDownload } from 'react-icons/ai';

export default function About() {
  return (
    <div id='about' className='bg-main-green text-stone-100 relative flex flex-col items-center py-20 h-full w-full px-6 md:px-32'>
      <h2 className='font-bold text-4xl mb-8 group'>About <span className='text-light-green group-hover:text-bright-green group-hover:drop-shadow-bright duration-300 drop-shadow-light'>Me</span></h2>
      <div className="grid md:grid-cols-3">
        <div className="grid grid-rows-2 gap-8">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className='cursor-default hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-light p-6'> I&apos;m an ambitious frontend developer based in Baku, Azerbaijan. I have a strong passion for creating beautiful and interactive websites that make a positive impact.</p>
          <p
            data-aos="fade-right"
            data-aos-duration="1100"
            className='cursor-default hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-light p-6'>I studied Computer Science at Azerbaijani Technical University, where I gained a solid foundation in programming and web development. My education has equipped me with the necessary skills to tackle various frontend challenges.</p>
        </div>
        <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
          <div
            data-aos='zoom-in'
            data-aos-duration="1000"
            className="relative flex justify-center items-center w-60 h-60 mt-12">
            <img className='object-cover w-[86%] h-[86%] rounded-full border-4 border-light-green drop-shadow-light hover:border-bright-green hover:drop-shadow-bright duration-300' src={Profile} alt="" />
            <div className="about-image-spin absolute top-1/2 left-1/2 w-60 h-60 rounded-full border-4 border-y-transparent border-x-light-green drop-shadow-light"></div>
          </div>
          <a
            data-aos='zoom-in'
            data-aos-duration="1100"
            rel="noopener noreferrer"
            target='_blank'
            className='flex gap-2 w-3/5 md:w-max justify-center items-center rounded-md bg-light-green drop-shadow-light text-dark-green font-bold md:px-8 py-2 mt-8 hover:bg-bright-green hover:drop-shadow-bright duration-300'
            href='https://drive.google.com/file/d/1HXg_RtdpMz2G2LnlFfxYubVgBqJQMl77/view?usp=drive_link'>
            Resume <AiOutlineDownload className='text-xl' />
          </a>
        </div>
        <div className="grid grid-rows-2 gap-8">
          <p
            data-aos="fade-left"
            data-aos-duration="1000"
            className='cursor-default hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-light p-6'>With over 1 year of experience in frontend development, I have honed my skills in HTML, CSS, and JavaScript. I have worked on diverse projects, collaborating with teams to deliver high-quality solutions.</p>
          <p
            data-aos="fade-left"
            data-aos-duration="1100"
            className='cursor-default hover:drop-shadow-bright hover:border-bright-green hover:-translate-y-4 duration-300 bg-dark-green border-4 rounded-xl border-light-green drop-shadow-light p-6'>I&apos;m a firm believer in continuous learning and staying up-to-date with the latest industry trends. I actively seek opportunities to expand my knowledge and improve my coding practices.</p>
        </div>
      </div>
    </div>
  );
}
