// components/Navbar.js
"use client"; // Обязательно добавляем эту строку в начало файла
import { useEffect, useState } from 'react';
import Btn from './btn';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed z-50 left-0 w-full transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : ''}`}>
            <div className="container mx-auto px-4">
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <img src='/logo.svg' alt='logo' className='w-24 sm:w-36' />
                    </div>
                    <div className='flex items-center space-x-4 sm:space-x-8'>
                        <p className='hidden sm:block m-2 py-2 px-5 text-sm border border-white rounded-full border-opacity-20'>Консультация без выходных</p>
                        <a className='mr-3 sm:mr-5 text-sm sm:text-base' href='tel:87089564055'>8(708)956 40 55</a>
                        <Btn href='https://api.whatsapp.com/send?phone=77089564055' className='bg-red-500 text-[10px] sm:text-[12px] uppercase px-4 sm:px-5 rounded-full inline-flex items-center py-2' text='мы в whatsapp' />
                    </div>
                </div>
            </div>
        </nav>
    );
}
