import React from 'react'
import nasserImage from '../../assets/images/nasser-hussein-about.png'
import Image from 'next/image'


export default function About() {
  return <>
  <div className='lg:flex-row flex flex-col justify-center mb-5 items-center lg:px-32 px-6 mt-16 text-white flex-wrap overflow-hidden'>
    <div className='lg:w-[40%] sm:w-[60%] w-full md:w-1/2 relative rotate-[10deg] scale-x-[-1] mt-10'>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#707AFE" d="M38.8,-58.6C53,-59,68.9,-54,71.7,-43.3C74.6,-32.7,64.2,-16.3,59.8,-2.6C55.4,11.2,56.8,22.4,52.5,30.6C48.3,38.8,38.3,44,28.6,48.1C18.9,52.3,9.5,55.4,0.7,54.2C-8.1,53,-16.2,47.5,-28.4,44.8C-40.5,42.1,-56.8,42.2,-65.2,35.1C-73.5,28.1,-73.9,14.1,-72.4,0.9C-70.9,-12.3,-67.4,-24.6,-62.4,-37.4C-57.4,-50.1,-50.8,-63.3,-40.1,-64.8C-29.4,-66.3,-14.7,-56.2,-1.2,-54.1C12.3,-52.1,24.7,-58.1,38.8,-58.6Z" transform="translate(100 100)" />
      </svg>
      <picture className='absolute bottom-[10.1%] w-[86.2%] left-[2.4138%]'><Image priority src={nasserImage} alt=''/></picture>
    </div>
    <div className='lg:w-[60%] w-full sm:w-[90%] flex flex-col items-end gap-y-6'>
      <h1 className='text-main lg:text-4xl text-2xl font-extralight' dir='rtl'>نبذه بسيطة عني</h1>
      <p className='text-lg font-extralight text-white/80 leading-6 space-y-5' dir='rtl'>
      <span className='block'>
        مطور واجهات أمامية اجيد استخدام مكتبة <span className='text-main'>React</span> لتطوير واجهات تفاعلية وسلسة
        وخبرة في تطوير تطبيقات باستخدام إطار  عمل <span className='text-main'>Next.js</span> مع التركيز على تحسين الأداء وتجربة المستخدم.
      </span>
      <span className='block'>
        مهارة في جلب البيانات والتعامل مع <span className='text-main'>APIs</span> بأنواعها المختلفة <span className='text-main'>(RESTful API)</span>.
      </span>
      <span className='block'>
        خبرة في العمل ضمن بيئة <span className='text-main'>Agile</span> لتنظيم المشاريع وتحسين سير العمل.
      </span>
      <span className='block'>
        إتقان استخدام أطر التصميم مثل <span className='text-main'>Tailwind CSS</span> و<span className='text-main'>Bootstrap</span> و<span className='text-main'>Material UI</span> لتصميم واجهات حديثة وسريعة.
      </span>
      <span className='block'>
        القدرة على كتابة كود نظيف ومنظم يسهل صيانته وتطويره.  
      </span>      
      <span className='block'>
        فهم جيد لمفاهيم الـ <span className='text-main'>Responsive Design</span> لضمان توافق الواجهات مع مختلف الأجهزة والشاشات.
      </span>
      <span className='block'>
      استخدام أدوات إدارة الحالة (State Management) مثل <span className='text-main'>Redux</span> أو <span className='text-main'>Context API</span>.
      </span>
      <span className='block'>
        خبرة في تحسين سرعة تحميل الصفحات وتقليل زمن الاستجابة.
      </span>
      <span>
        القدرة على التعاون والعمل ضمن فريق باستخدام أنظمة التحكم في الإصدارات مثل <span className='text-main'>Git</span>.
      </span>
      </p>
    </div>
    <ul dir='rtl' className='text-white/80 font-light md:flex space-y-4 md:space-y-0 flex-wrap gap-y-4 w-full md:w-[90%] lg:w-[80%] xl:w-3/2 mt-5 mb-6 me-auto'>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-regular fa-user"></i></span>الأسم: <span className='text-main ms-1 font-bold texl-sm'>ناصر حسين</span> </li>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-brands fa-pagelines"></i></span>العمر: <span className='text-main ms-1 font-bold texl-sm'>28</span> </li>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-solid fa-graduation-cap"></i></span>الدراسة: <span className='text-main ms-1 font-bold texl-sm'>علوم الحاسوب</span> </li>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-solid fa-landmark-flag"></i></span>الجنسية: <span className='text-main ms-1 font-bold texl-sm'>مصري</span> </li>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-solid fa-location-dot"></i></span>العنوان: <span className='text-main ms-1 font-bold texl-sm'>الجيزة - مصر</span> </li>
        <li className='flex items-center w-full md:w-1/3'><span className='size-8 bg-[#333441] text-main rounded-full flex justify-center items-center me-1'><i className="fa-solid fa-briefcase"></i></span>سنوات الخبرة: <span className='text-main ms-1 font-bold texl-sm'>ثلاث سنوات</span> </li>        
      </ul>
  </div>  
  
  </>
}
