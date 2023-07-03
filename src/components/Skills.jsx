import React from 'react'

import {
    AiFillHtml5,
    DiCss3,
    SiJavascript,
    DiSass,
    FaBootstrap,
    DiJqueryLogo,
    SiTailwindcss,
    BsGit,
    FaReact
} from 'react-icons/all'

export default function Skills() {
    const skills = [
        {
            id: 1,
            name: 'HTML',
            logo: <AiFillHtml5 />,
            color: 'group-hover:bg-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            logo: <DiCss3 />,
            color: 'group-hover:bg-blue-600'
        },
        {
            id: 3,
            name: 'Javascript',
            logo: <SiJavascript />,
            color: 'group-hover:bg-yellow-300'
        },
        {
            id: 4,
            name: 'SASS',
            logo: <DiSass />,
            color: 'group-hover:bg-pink-400'
        },
        {
            id: 5,
            name: 'Jquery',
            logo: <DiJqueryLogo />,
            color: 'group-hover:bg-sky-700'
        },
        {
            id: 6,
            name: 'Bootstrap',
            logo: <FaBootstrap />,
            color: 'group-hover:bg-violet-500'
        },
        {
            id: 7,
            name: 'Tailwind',
            logo: <SiTailwindcss />,
            color: 'group-hover:bg-cyan-400'
        },
        {
            id: 8,
            name: 'Git',
            logo: <BsGit />,
            color: 'group-hover:bg-red-600'
        },
        {
            id: 9,
            name: 'React.js',
            logo: <FaReact />,
            color: 'group-hover:bg-sky-300'
        }
    ]
    return (
        <div className='bg-dark-green text-stone-100 relative grid grid-cols-1 md:grid-cols-2 py-20 h-full w-full px-6 md:px-32'>
            <div className="text-center mb-8 h-full flex flex-col justify-center">
                <h2
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className='font-bold md:w-4/5 text-4xl mb-8 group'>My <span className='text-light-green drop-shadow-light group-hover:text-bright-green group-hover:drop-shadow-bright duration-300'>Skills</span></h2>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    className='md:w-4/5'>Check out my top skills for development! If you don't see what you're looking for, no worries—we can discuss other options too.</p>
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="skills-container w-full mt-8 md:mt-0">
                {skills.map(skill =>
                    <div key={skill.id} title={skill.name} className="w-full flex justify-center items-center cursor-default skill-block group relative">
                        <div className={`bg-light-green drop-shadow-light text-dark-green absolute overflow-hidden skill-logo ${skill.color} group-hover:drop-shadow-none duration-300 z-10 rounded-full text-5xl p-3`}>
                            <div className="">
                                {skill.logo}
                            </div>
                        </div>
                        <div className="z-20 w-2/3">
                            <p className='left-0 skill-name text-transparent group-hover:bg-main-green rounded group-hover:border-bright-green group-hover:border-2 group-hover:drop-shadow-bright p-2 text-center group-hover:text-bright-green duration-300'>{skill.name}</p>

                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
