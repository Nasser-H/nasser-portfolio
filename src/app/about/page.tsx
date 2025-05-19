import Link from 'next/link'
import React from 'react'
import nasserImage from '../../assets/nasser-hussein-about.png'
import Image from 'next/image'


export default function About() {
  return <>
  <div className='lg:flex-row flex flex-col justify-center mb-5 items-center lg:px-32 px-6 mt-12 text-white'>
    <div className='lg:w-[43%] sm:w-[60%] w-full md:w-1/2 relative rotate-[10deg] scale-x-[-1]'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#707AFE" d="M38.8,-58.6C53,-59,68.9,-54,71.7,-43.3C74.6,-32.7,64.2,-16.3,59.8,-2.6C55.4,11.2,56.8,22.4,52.5,30.6C48.3,38.8,38.3,44,28.6,48.1C18.9,52.3,9.5,55.4,0.7,54.2C-8.1,53,-16.2,47.5,-28.4,44.8C-40.5,42.1,-56.8,42.2,-65.2,35.1C-73.5,28.1,-73.9,14.1,-72.4,0.9C-70.9,-12.3,-67.4,-24.6,-62.4,-37.4C-57.4,-50.1,-50.8,-63.3,-40.1,-64.8C-29.4,-66.3,-14.7,-56.2,-1.2,-54.1C12.3,-52.1,24.7,-58.1,38.8,-58.6Z" transform="translate(100 100)" />
      </svg>
      <picture className='absolute bottom-[10.1%] w-[86.2%] start-[2.4138%]'><Image priority src={nasserImage} alt=''/></picture>
    </div>
    <div className='lg:w-[57%] w-full sm:w-[90%] flex flex-col items-end gap-y-6'>
      <h1 className='text-main lg:text-4xl text-2xl font-extralight' dir='rtl'>مطور واجهات أمامية</h1>
      <p className='text-lg font-extralight text-white/80 leading-7' dir='rtl'>
        أهلاً، أنا <span className='text-main'>ناصر حسين</span> ،مطور واجهات أمامية عندي شغف وحب كبير للتطوير وتصميم
        مواقع ويب تكون مريحة وسهلة في الاستخدام. البرمجة بالنسبة لي مش مجرد شغل،
        دي وسيلة تعبير فني بستخدمها لحل المشاكل بطرق مبتكرة. دايمًا بشتغل على تقديم تجارب
        ستخدم رائعة، واهتم بكل تفصيلة علشان أضمن إن الواجهات تكون متجاوبة وسريعة.
      </p>
      <Link className='btn uppercase md:py-3 md:px-8 lg:py-4 lg:px-12 tracking-widest text-lg' href={'/about'}>about</Link>
    </div>
  </div>  
  </>
}
