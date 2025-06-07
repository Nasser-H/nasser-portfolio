'use client'
import React, { useState } from 'react'

import Image from 'next/image';
import { allProjects, nextProjects, reactProjects, staticProjects, taps } from '../_links/links';

export default function Projects() {
    const [activeTap, setActiveTap] = useState('all');
  return <>
  <div className='text-center mt-16'>
    <h1 dir='rtl' className='text-main text-3xl font-extralight'>المشاريع</h1>
    <div className="my-8 text-main">
        <ul className="flex flex-wrap items-center justify-center gap-x-11 gap-y-4 text-xl font-light text-center">
            {taps.map((tap)=>
                <li key={tap} className={`cursor-pointer hover:bg-white/10 rounded-lg py-1 px-4 capitalize ${activeTap == tap && 'bg-white/10'}`} onClick={()=>setActiveTap(tap)}>
                    {tap}
                </li>
            )}
        </ul>
    </div>
    <div className='flex flex-wrap xl:mx-36 sm:mx-28 md:mx-24 xl:mt-14'>
        {(activeTap=='react'?reactProjects:activeTap=='next.js'?nextProjects:activeTap=='static'?staticProjects:allProjects).map((project, index)=>
            <div key={index} className='w-full lg:w-1/2 xl:w-1/3 p-7'>
                <picture className='block rounded-lg overflow-auto relative group'>
                    <Image width={800} height={450} src={project.projectImage} alt={project.projectName}/>
                    <div className='hidden absolute top-0 bottom-0 left-0 right-0 bg-white/40 group-hover:flex justify-around items-center px-11'>
                        <a className='size-11 bg-bgMain text-white rounded-full flex justify-center items-center border-2 border-bgMain hover:text-main hover:border-main' target='_blanck' href={project.projectGitHubLink}><i className="fa-solid fa-code"></i></a>
                        <a className='size-11 bg-bgMain text-white rounded-full flex justify-center items-center border-2 border-bgMain hover:text-main hover:border-main' target='_blanck' href={project.projectLiveLink}><i className="fa-solid fa-eye"></i></a>
                    </div>
                </picture>
                <p className='pt-5 text-white/80 text-lg font-extralight'>{project.projectName}</p>
            </div>
        )}
    </div>
  </div>
  </>
}
