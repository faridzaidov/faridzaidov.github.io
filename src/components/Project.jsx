import React from 'react'
// import { AiFillGithub } from 'react-icons/ai'
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'

export default function Project({ title, about, github, live, cover }) {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className='rounded-md group project cursor-default'>
            <div className="project-cover relative group-hover:rounded-xl group-hover:drop-shadow-light overflow-hidden">
                <a href={live} target='_blank' className='cursor-pointer'>
                    <img className='w-full project-img rounded-t-xl'
                        src={cover} alt={title + '_cover'} />
                    <div className="absolute project-cover-mask rounded-t-xl left-0 top-0 w-full h-full group-hover:bg-gradient-to-t from-stone-900 via-transparent"></div>
                    <p className='w-full hidden group-hover:block group-hover:absolute bottom-2 left-2 project-subtitle text-sm text-gray-300'>{about}</p>
                </a>
            </div>
            <div className="w-full project-about bg-dark-green rounded-b-xl group-hover:rounded-xl p-4">
                <div className="flex justify-between">
                    <h1 className='text-xl group-hover:text-light-green duration-300 group-hover:drop-shadow-bright'>{title}</h1>
                    <div className="links flex gap-4 text-2xl">
                        <a href={github} target='_blank' className='hover:text-light-green hover:drop-shadow-bright duration-300'>
                            <BsGithub />
                        </a>
                        <a href={live} target='_blank' className='hover:text-light-green hover:drop-shadow-bright duration-300'>
                            <BsBoxArrowUpRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
