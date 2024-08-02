"use client";
import { useEffect, useRef } from 'react';

export default function Hero({ Title, image, children }) {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollTop = window.pageYOffset;
                heroRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const heroStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <div className="w-full flex-col overflow-hidden" style={{ position: 'relative', height: '600px' }}>
            <div ref={heroRef} className="absolute inset-0" style={heroStyle}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white">
                    <h1 className="mb-5 text-[40px] font-bold">{Title}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
