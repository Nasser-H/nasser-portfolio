'use client'
import React, { useState } from 'react'
import flutzaShopImage from '../../assets/images/flutza-shop.png';
import countriesImage from '../../assets/images/countries.png';
import startFrameworkImage from '../../assets/images/start-framework.png';
import linkedPostsImage from '../../assets/images/linked-posts.png';
import gameOverImage from '../../assets/images/game-over.png';
import weatherImage from '../../assets/images/weather.png';
import quizeAppImage from '../../assets/images/quize-app.png';
import bookMarkImage from '../../assets/images/book-mark.png';
import moviesAppMasterImage from '../../assets/images/movies_app-master.png';
import qoutesAppImage from '../../assets/images/qoutes-app.png';
import messyTodoProjectImage from '../../assets/images/messy-todo-project.png';
import solarCompanyLandingPageImage from '../../assets/images/solar-company-landing-page.png';
import danielsImage from '../../assets/images/daniels.png';
import bakeryImage from '../../assets/images/bakery.png';
import fokirImage from '../../assets/images/fokir.png';
import mealifyImage from '../../assets/images/mealify.png';
import gridMasterclassImage from '../../assets/images/grid-masterclass.png';
import devfolioImage from '../../assets/images/devfolio.png';
import loginSystemImage from '../../assets/images/login-system.png';
import Image from 'next/image';
import { Project } from '../_interfaces/interfaces';

export default function Projects() {
    const [activeTap, setActiveTap] = useState('all');
    const taps : string[] = ['all', 'react', 'next.js', 'static'];
    const nextProjects : Project[] = [
        {
            projectName: 'Linked-Posts',
            projectImage: linkedPostsImage,
            projectGitHubLink: 'https://github.com/Nasser-H/linked-posts',
            projectLiveLink: 'https://linked-posts-psi.vercel.app/'
        }
    ];
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
    const staticProjects : Project[] = [
        {
            projectName: 'Game Over',
            projectImage: gameOverImage,
            projectGitHubLink: 'https://github.com/Nasser-H/GameOver',
            projectLiveLink: 'https://nasser-h.github.io/GameOver/'
        },
        {
            projectName: 'Weather',
            projectImage: weatherImage,
            projectGitHubLink: 'https://github.com/Nasser-H/weather',
            projectLiveLink: 'https://nasser-h.github.io/weather/'
        },
        {
            projectName: 'Quize App',
            projectImage: quizeAppImage,
            projectGitHubLink: 'https://github.com/Nasser-H/quize-app',
            projectLiveLink: 'https://nasser-h.github.io/quize-app/'
        },
        {
            projectName: 'Book Mark',
            projectImage: bookMarkImage,
            projectGitHubLink: 'https://github.com/Nasser-H/bookMark',
            projectLiveLink: 'https://nasser-h.github.io/bookMark/'
        },
        {
            projectName: 'Movies App Master',
            projectImage: moviesAppMasterImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Movies_App-master',
            projectLiveLink: 'https://nasser-h.github.io/Movies_App-master/'
        },
        {
            projectName: 'Qoutes App',
            projectImage: qoutesAppImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Qoutes-App',
            projectLiveLink: 'https://nasser-h.github.io/Qoutes-App/'
        },
        {
            projectName: 'Messy Todo Project',
            projectImage: messyTodoProjectImage,
            projectGitHubLink: 'https://github.com/Nasser-H/messy_todo_project',
            projectLiveLink: 'https://nasser-h.github.io/messy_todo_project/'
        },
        {
            projectName: 'Solar Company Landing Page',
            projectImage: solarCompanyLandingPageImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Solar-Company-Landing-Page',
            projectLiveLink: 'https://nasser-h.github.io/Solar-Company-Landing-Page/'
        },
        {
            projectName: 'Daniels',
            projectImage: danielsImage,
            projectGitHubLink: 'https://github.com/Nasser-H/daniels',
            projectLiveLink: 'https://nasser-h.github.io/daniels/'
        },
        {
            projectName: 'Bakery',
            projectImage: bakeryImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Bakery',
            projectLiveLink: 'https://nasser-h.github.io/Bakery/'
        },
        {
            projectName: 'Fokir',
            projectImage: fokirImage,
            projectGitHubLink: 'https://github.com/Nasser-H/Fokir',
            projectLiveLink: 'https://nasser-h.github.io/Fokir/'
        },
        {
            projectName: 'Mealify',
            projectImage: mealifyImage,
            projectGitHubLink: 'https://github.com/Nasser-H/mealify',
            projectLiveLink: 'https://nasser-h.github.io/mealify/'
        },
        {
            projectName: 'Grid Masterclass',
            projectImage: gridMasterclassImage,
            projectGitHubLink: 'https://github.com/Nasser-H/grid-masterclass',
            projectLiveLink: 'https://nasser-h.github.io/grid-masterclass/'
        },
        {
            projectName: 'Devfolio',
            projectImage: devfolioImage,
            projectGitHubLink: 'https://github.com/Nasser-H/devfolio',
            projectLiveLink: 'https://nasser-h.github.io/devfolio/'
        },
        {
            projectName: 'Login System',
            projectImage: loginSystemImage,
            projectGitHubLink: 'https://github.com/Nasser-H/loginSystem',
            projectLiveLink: 'https://nasser-h.github.io/loginSystem/'
        }
    ];
    const allProjects :Project[] = [...reactProjects, ...nextProjects, ...staticProjects];
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
