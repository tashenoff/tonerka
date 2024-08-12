"use client";
import Hero from '@/components/hero'
import Btn from '@/components/btn'
import ServiceBlock from '@/components/ServiceBlock'
import { useEffect, useState } from 'react';


export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero Title='ЗАПРАВКА КАРТРИДЖЕЙ в Астане' image='https://tonerka.kz/img/home.png'>
        <Btn href='https://api.whatsapp.com/send?phone=77089564055' className='bg-red-500 text-[12px] uppercase px-5 rounded-full inline-flex items-center py-2' text='написать спмециалисту'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </Btn>

        <Btn onClick={handleScrollToNextSection} className='p-5 border rounded-full inline-flex absolute bottom-10 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>

        </Btn>

      </ Hero>
      <ServiceBlock>
        <Btn href='https://api.whatsapp.com/send?phone=77089564055' className='bg-blue-500 text-[12px] uppercase px-5 rounded-lg w-full justify-between flex items-center py-2' text='написать спмециалисту'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </Btn>
      </ServiceBlock>
      <Hero Title='Оставьте заявку на консультацию' image='https://tonerka.kz/img/service.png'>
        <Btn href='https://api.whatsapp.com/send?phone=77089564055' className='bg-red-500 text-[12px] uppercase px-5 rounded-full inline-flex items-center py-2' text='написать спмециалисту'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>

        </Btn>
      </ Hero>


    </main>
  );
}
