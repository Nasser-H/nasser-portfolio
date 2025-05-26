'use client'
import React, { useState } from 'react'
import flutzaShopImage from '../../assets/images/flutza-shop.png';
import countriesImage from '../../assets/images/countries.png';
import startFrameworkImage from '../../assets/images/start-framework.png';
// import linkedPostsImage from '../../assets/images/linked-posts.png';
import Image from 'next/image';
import { Project } from '../_interfaces/interfaces';

export default function Projects() {
    const [activeTap, setActiveTap] = useState('all');
    const taps : string[] = ['all', 'react', 'next.js', 'static'];
    // const nextProjects : Project[] = [
    //     {
    //         projectName: 'Linked-Posts',
    //         projectImage: linkedPostsImage,
    //         projectGitHubLink: 'https://github.com/Nasser-H/linked-posts',
    //         projectLiveLink: 'https://linked-posts-psi.vercel.app/'
    //     }
    // ];
    const reactProjects : Project[] = [
        {
            projectName: 'Flutza Shop (E-Commerce)',
            projectImage: flutzaShopImage,
            projectGitHubLink: 'https://github.com/Nasser-H/flutza-shop',
            projectLiveLink: 'https://flutza-shop.vercel.app/'
        },
        {
            projectName: 'Countries',
            projectImage: countriesImage,
            projectGitHubLink: 'https://github.com/Nasser-H/countreis',
            projectLiveLink: 'https://countreis.vercel.app/'
        },
        {
            projectName: 'Start-Framework',
            projectImage: startFrameworkImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Start-Framework',
            projectLiveLink: 'https://start-framework-weld-sigma.vercel.app/'
        },
    ];
    // const staticProjects : Project[] = [
    //     {
    //         projectName: '',
    //         projectImage: startFrameworkImage,
    //         projectGitHubLink: '',
    //         projectLiveLink: ''
    //     },
    // ];
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
    <div className='flex flex-wrap mx-36 mt-14'>
        {reactProjects.map((project, index)=>
            <div key={index} className='w-1/3 p-7'>
                <picture className='block rounded-lg overflow-auto relative group'>
                    <Image src={project.projectImage} alt={project.projectName}/>
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
