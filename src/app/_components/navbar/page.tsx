'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavBar() {
    const navs: { text: string, link: string }[] = [
        { text: "fa-solid fa-house-chimney", link:"/" },
        { text: "fa-regular fa-user", link:"/about" },
        { text: "fa-solid fa-store", link:"/projects" },
        { text: "fa-solid fa-code", link:"" },
        { text: "fa-solid fa-phone", link:"" },
    ];
    const pathName = usePathname();
    
  return <>
  <nav className='fixed lg:right-[2%] bottom-0 w-full lg:w-auto lg:h-screen flex lg:flex-col justify-center z-40'>
    <ul className='text-white text-xl flex lg:block justify-center bg-bgSecond backdrop-blur-3xl w-full lg:py-8 px-8 lg:rounded-full rounded-t-xl lg:px-1 py-1 space-y-1'>
        {navs.map((nav : {text: string, link: string} ,index : number) =>
              <Link  key={index} href={nav.link}><li className={`size-14 ${pathName == nav.link ? 'bg-bgMain text-main -translate-y-1/2 lg:translate-y-0' : 'hover:bg-main'} rounded-full flex justify-center items-center cursor-pointer`}><i className={nav.text}></i></li></Link>
        )}
        <Link href={''}><li className='size-14 hover:bg-main rounded-full flex justify-center items-center cursor-pointer'><span>En</span></li></Link>
    </ul>
  </nav>

  </>
}
