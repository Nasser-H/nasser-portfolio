import React from 'react'
import { Skill } from '../_interfaces/interfaces';

export default function Skills() {
    const skills : Skill[] = [
        {
            skillName: 'HTML5',
            skillIcon: 'fa-brands fa-html5',
            levelInPercentage: 97
        },
        {
            skillName: 'CSS',
            skillIcon: 'fa-brands fa-css3-alt',
            levelInPercentage: 89
        },
        {
            skillName: 'JS',
            skillIcon: 'fa-brands fa-node-js',
            levelInPercentage: 80
        },
        {
            skillName: 'TS',
            skillIcon2: 'M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z',
            levelInPercentage: 76
        },
        {
            skillName: 'React.js',
            skillIcon: 'fa-brands fa-react',
            levelInPercentage: 87
        },
        {
            skillName: 'Next.js',
            skillIcon2: 'M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z',
            levelInPercentage: 84
        },
        {
            skillName: 'Redux',
            skillIcon2: 'M16.633 16.504c.869-.075 1.543-.84 1.499-1.754-.046-.914-.795-1.648-1.708-1.648h-.061c-.943.031-1.678.824-1.648 1.769.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.004 4.795-1.603.838-3.296 1.154-4.944.929-1.378-.194-2.456-.81-3.116-1.798-.988-1.499-1.078-3.116-.255-4.734.601-1.169 1.499-2.023 2.099-2.443-.15-.389-.33-1.048-.42-1.542-4.436 3.177-3.985 7.521-2.637 9.574 1.004 1.498 3.057 2.456 5.304 2.456.599 0 1.229-.044 1.843-.194 3.896-.749 6.847-3.086 8.54-6.532l.014-.031zM21.981 12.758c-2.321-2.727-5.738-4.225-9.634-4.225h-.51c-.253-.554-.837-.899-1.497-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074c.675-.03 1.259-.45 1.498-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.004 2.622 2.322 3.236 3.896.538 1.288.509 2.547-.045 3.597-.854 1.647-2.293 2.517-4.195 2.517-1.199 0-2.367-.375-2.967-.644-.359.298-.959.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.093-1.647 5.918-3.236.898-1.798.824-4.824-1.469-7.416l-.014.03zM6.49 17.042c.029.899.793 1.648 1.708 1.648h.06c.959-.03 1.693-.823 1.648-1.768 0-.899-.779-1.647-1.693-1.647h-.061c-.06 0-.149 0-.225.029-1.243-2.098-1.768-4.346-1.572-6.771.119-1.828.719-3.417 1.797-4.735.899-1.124 2.592-1.679 3.746-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.449c-.345-4.914-3.4-7.492-6.322-7.492-2.742 0-5.273 1.993-6.293 4.915-1.393 3.896-.479 7.641 1.229 10.638-.149.195-.239.539-.209.868z',
            levelInPercentage: 97
        },
        {
            skillName: 'RESTful API',
            skillIcon2: 'M20,6H4A2,2,0,0,0,2,8v8a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6ZM9.29,14.8,9,13.73H7.16L6.87,14.8H5.17L7,9.07H9.09L11,14.8Zm6.34-3.14a1.7,1.7,0,0,1-.36.64,1.82,1.82,0,0,1-.67.44,2.75,2.75,0,0,1-1,.17h-.44V14.8H11.6V9.09h2a2.43,2.43,0,0,1,1.62.47,1.67,1.67,0,0,1,.55,1.35A2.36,2.36,0,0,1,15.63,11.66Zm2.58,3.14H16.66V9.09h1.55ZM8.45,11.53l.24.93H7.48l.24-.93c0-.13.08-.28.12-.47s.09-.38.13-.57a4.63,4.63,0,0,0,.1-.48c0,.13.07.29.11.5l.15.58Zm5.59-1a.57.57,0,0,1,.16.43.75.75,0,0,1-.11.42.59.59,0,0,1-.27.22.9.9,0,0,1-.37.07h-.31V10.34h.4A.63.63,0,0,1,14,10.51Z',
            levelInPercentage: 90
        },
        {
            skillName: 'Bootstrap',
            skillIcon: 'fa-brands fa-bootstrap',
            levelInPercentage: 95
        },
        {
            skillName: 'Material UI',
            skillIcon2: 'M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0-3 1.73V7.67l3-1.732V2.474z',
            levelInPercentage: 55
        },
        {
            skillName: 'Tailwindcss',
            skillIcon2: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
            levelInPercentage: 96
        },
        {
            skillName: 'GitHub',
            skillIcon: 'fa-brands fa-github',
            levelInPercentage: 98
        },
        {
            skillName: 'Figma',
            skillIcon: 'fa-brands fa-figma',
            levelInPercentage: 85
        },
        {
            skillName: 'Jira',
            skillIcon2: 'M11.53,2a4.37,4.37,0,0,0,4.35,4.35h1.78v1.7A4.35,4.35,0,0,0,22,12.4V2.84A.85.85,0,0,0,21.16,2H11.53M6.77,6.8a4.36,4.36,0,0,0,4.34,4.34h1.8v1.72a4.36,4.36,0,0,0,4.34,4.34V7.63a.84.84,0,0,0-.83-.83H6.77M2,11.6a4.34,4.34,0,0,0,4.35,4.34H8.13v1.72A4.36,4.36,0,0,0,12.47,22V12.43a.85.85,0,0,0-.84-.84H2Z',
            levelInPercentage: 72
        }
    ];
    const languages : Skill[] = [
        {
            skillName: 'Arabic',
            skillIcon: 'Ar',
            levelInPercentage: 100
        },
        {
            skillName: 'English',
            skillIcon: 'En',
            levelInPercentage: 66
        }
    ];
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
