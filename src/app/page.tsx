import React from 'react'
import nasserImag from '../assets/images/nasser-hussein-home.png';
import Image from 'next/image'; 
import Link from 'next/link';
export default function Home() {
  return <>
  <div className='lg:flex-row flex flex-col justify-center mb-5 items-center lg:px-32 px-6 mt-12 text-white'>
    <div className='lg:w-[43%] sm:w-[60%] w-full md:w-1/2 relative  scale-x-[-1]'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#707AFE" d="M49.6,-65.3C60.7,-60.1,63.8,-40.9,67.5,-23.4C71.1,-5.9,75.2,9.9,70.9,23C66.5,36,53.7,46.2,40.5,50.6C27.3,55,13.7,53.7,-0.9,54.9C-15.4,56.1,-30.7,59.7,-39.9,54C-49.1,48.2,-52.2,33.1,-57.6,18.3C-63,3.5,-70.7,-11,-67.4,-22.1C-64.1,-33.2,-49.7,-40.9,-36.6,-45.4C-23.5,-50,-11.8,-51.4,3.7,-56.5C19.2,-61.6,38.4,-70.5,49.6,-65.3Z" transform="translate(100 100)" />
      </svg>
      <picture className='absolute bottom-[14.7%] w-[71%] left-[17.9%]'><Image width={453} height={604} priority src={nasserImag} alt="Nasser Hussein photo" /></picture>
    </div>
    <div className='lg:w-[57%] w-full sm:w-[90%] flex flex-col items-end gap-y-6'>
      <h1 className='text-main lg:text-4xl text-2xl font-extralight' dir='rtl'>مطور واجهات أمامية</h1>
      <p className='text-lg font-extralight text-white/80 leading-7' dir='rtl'>
        أهلاً، أنا <span className='text-main'>ناصر حسين</span>، مطور واجهات
         أمامية وعندي شغف كبير بالتصميم وتطوير مواقع الويب علشان تكون
         مريحة وسهلة الاستخدام. البرمجة بالنسبة لي مش بس شغل، دي
         وسيلة تعبير فني بستخدمها عشان أحل المشاكل بطرق مبتكرة.
         دايمًا بشتغل على تقديم تجارب استخدام سهلة،
         وباهتم بكل تفصيلة عشان أضمن إن الواجهات تكون دائما متجاوبة وسريعة.
      </p>
      <Link dir='rtl' className='btn uppercase md:py-3 md:px-8 lg:py-4 lg:px-12 tracking-widest text-lg' href={'/about'}>سيرتي الذاتية (CV)</Link>
    </div>
  </div>
  </>
}

