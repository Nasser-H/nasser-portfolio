import React from 'react'
import nasserImag from '../assets/nasser hussein.png';
import Image from 'next/image';
export default function Home() {
  return <>
  <div className='flex justify-center mb-5 items-center lg:px-32 px-6  text-white'>
    <div className='w-[45%] relative'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#707AFE" d="M49.6,-65.3C60.7,-60.1,63.8,-40.9,67.5,-23.4C71.1,-5.9,75.2,9.9,70.9,23C66.5,36,53.7,46.2,40.5,50.6C27.3,55,13.7,53.7,-0.9,54.9C-15.4,56.1,-30.7,59.7,-39.9,54C-49.1,48.2,-52.2,33.1,-57.6,18.3C-63,3.5,-70.7,-11,-67.4,-22.1C-64.1,-33.2,-49.7,-40.9,-36.6,-45.4C-23.5,-50,-11.8,-51.4,3.7,-56.5C19.2,-61.6,38.4,-70.5,49.6,-65.3Z" transform="translate(100 100)" />
      </svg>
      <picture className='absolute bottom-[14.7%] w-[71%] start-[17.9%]'><Image width={453} height={604} src={nasserImag} alt="" /></picture>
    </div>
    <div className='w-[55%]'>
      <h1 dir='rtl'>مطور واجهات أمامية</h1>
      <p dir='rtl'>
        أهلاً، أنا ناصر حسين، مطور واجهات أمامية عندي شغف وحب كبير للتطوير وتصميم
        مواقع ويب تكون مريحة وسهلة في الاستخدام. البرمجة بالنسبة لي مش مجرد شغل،
        دي وسيلة تعبير فني بستخدمها لحل المشاكل بطرق مبتكرة. دايمًا بشتغل على تقديم تجارب
        ستخدم رائعة، واهتم بكل تفصيلة علشان أضمن إن الواجهات تكون متجاوبة وسريعة.

      </p>
    </div>
  </div>
  </>
}

