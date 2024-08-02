// components/Navbar.js
"use client"; // Добавляем эту строку в начало файла

import { useEffect, useState } from 'react';
import menu from '../data/data';
import Btn from './btn';

export default function Navbar() {
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

    return (
        <nav className={`fixed z-50 left-0 w-full border-b border-white border-opacity-25 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-lg shadow-lg' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <ul className='flex py-5'>
                    {menu.map((item) => (
                        <li className='px-5' key={item.href}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center'>
                    <p className='m-2 py-2 px-5 text-sm border border-white rounded-full border-opacity-20'>Консультация без выходных</p>
                    <a className='mr-5' href='tel:87089564055'>8(708)956 40 55</a>
                    <Btn text='Написать в WP' />
                </div>
            </div>
        </nav>
    );
}
