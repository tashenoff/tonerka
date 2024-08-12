"use client";
import { useEffect, useRef } from 'react';

export default function Hero({ Title, image, children }) {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (imgRef.current) {
                const { innerWidth, innerHeight } = window;
                const { clientX, clientY } = e;

                const rotateX = (clientY / innerHeight - 0.5) * 10; // Уменьшение коэффициента для более медленного эффекта
                const rotateY = (clientX / innerWidth - 0.5) * 10;

                imgRef.current.style.transform = `translate(-50%, -50%) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const heroStyle = {
        height: '750px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        perspective: '1000px', // Добавление перспективы для 3D-эффекта
    };

    const imgStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%', // Установите максимальную ширину для изображения
        maxHeight: '80%', // Установите максимальную высоту для изображения
        objectFit: 'cover',
        transition: 'transform 0.3s ease-out', // Увеличение времени перехода для более плавного эффекта
    };

    return (
        <div className="w-full flex-col overflow-hidden " style={heroStyle}>
            <img ref={imgRef} src={image} alt="Hero" style={imgStyle} />
            {/* <div className='bg-gradient-to-r -z-10 from-indigo-500 via-purple-500 to-pink-500 w-[200px] h-[200px] rounded-full absolute left-0 top-0'></div> */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative z-10 text-white h-full w-full flex items-center justify-center flex-col">
                <h1 className="mb-5 uppercase text-[40px] font-bold">{Title}</h1>
                {children}
            </div>
        </div>
    );
}
