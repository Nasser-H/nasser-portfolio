import React from 'react'
import { languages, skills } from '../_links/links';

export default function Skills() {

  return <> 
    <div className='text-center mt-16 mb-10'>
        <h1 dir='rtl' className='mb-8 text-main text-3xl font-extralight'>المهارات</h1>
        <div className='flex flex-wrap justify-start items-center w-[90%] sm:w-3/4 lg:w-1/2 mx-auto gap-y-10 mb-14'>
            {skills.map((skill, index)=>
                <div key={index} className='text-white/80 flex justify-center items-center px-2 w-1/2 md:w-1/3'>
                    <div className='bg-bgSecond rounded-lg w-[146px] h-[150px] flex flex-col justify-center items-center space-y-4'>
                        <div className='size-[90px] rounded-full flex justify-center items-center' style={{ background:`conic-gradient(#ededed ${Math.round(360-skill.levelInPercentage*360/100)}deg, #707afe 0deg)` }}>
                            <div className='size-[75px] bg-bgMain text-white rounded-full flex justify-center items-center text-4xl'>
                                {skill.skillIcon2?
                                    <svg className='hover:text-main' stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d={skill.skillIcon2}></path>
                                    </svg>
                                    :
                                    <i className={`hover:text-main ${skill.skillIcon}`}></i>
                                }
                            </div>
                        </div>
                        <p className='text-base font-extralight'>{skill.skillName}</p>
                    </div>
                </div>  
            )}
        </div>
        <h1 dir='rtl' className='mb-8 text-main text-3xl font-extralight'>اللغات</h1>
        <div className='flex flex-wrap justify-center items-center w-[90%] sm:w-3/4 lg:w-1/2 mx-auto gap-y-10'>
            {languages.map((language, index)=>
                <div key={index} className='text-white/80 flex justify-center items-center px-2 w-1/2 md:w-1/3'>
                    <div className='bg-bgSecond rounded-lg w-[146px] h-[150px] flex flex-col justify-center items-center space-y-4'>
                        <div className='size-[90px] rounded-full flex justify-center items-center' style={{ background:`conic-gradient(#ededed ${Math.round(360-language.levelInPercentage*360/100)}deg, #707afe 0deg)` }}>
                            <div className='size-[75px] bg-bgMain text-white rounded-full flex justify-center items-center text-4xl'>
                                <span className='text-3xl font-bold hover:text-main'>{language.skillIcon}</span>
                            </div>
                        </div>
                        <p className='text-base font-extralight'>{language.skillName}</p>
                    </div>
                </div>  
            )}
        </div>        
    </div>
  </>
}
