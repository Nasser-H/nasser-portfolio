import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return <>
    <div className='w-full px-4 sm:px-6 md:px-8 lg:py-4 lg:px-10 fixed z-50 backdrop-blur-sm'>
        <div className='flex flex-col mt-4 lg:mt-0 items-center lg:flex-row justify-between w-full'>
            <h1 className='uppercase text-main text-2xl lg:text-xl'><Link href="/">Nasser Hussein</Link></h1>
            <ul className='text-xl lg:text-lg text-white mt-5 lg:mt-0 flex gap-x-5'>
                <li className='size-8 bg-bgMain hover:border-main hover:border-2 hover:text-main duration-200 rounded-full flex justify-center items-center cursor-pointer'><a href="https://www.facebook.com/profile.php?id=100004291441295" target='_blank'><i className="fa-brands fa-facebook-f"></i></a></li>
                <li className='size-8 bg-bgMain hover:border-main hover:border-2 hover:text-main duration-200 rounded-full flex justify-center items-center cursor-pointer'><a href="http://wa.me/201061132684" target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
                <li className='size-8 bg-bgMain hover:border-main hover:border-2 hover:text-main duration-200 rounded-full flex justify-center items-center cursor-pointer'><a href="mailto:nasser.h0404@gmail.com" target='_blank'><i className="fa-solid fa-at"></i></a></li>
                <li className='size-8 bg-bgMain hover:border-main hover:border-2 hover:text-main duration-200 rounded-full flex justify-center items-center cursor-pointer'><a href="https://github.com/Nasser-H" target='_blank'><i className="fa-brands fa-github"></i></a></li>
                <li className='size-8 bg-bgMain hover:border-main hover:border-2 hover:text-main duration-200 rounded-full flex justify-center items-center cursor-pointer'><a href="https://www.linkedin.com/in/nasser-hussein/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    </div>
  </>
}
