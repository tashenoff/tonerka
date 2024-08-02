export default function Hero({ Title, image, children }) {
    // Стиль для фонового изображения
    const heroStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',  // Заставляет изображение покрывать весь контейнер
        backgroundPosition: 'center', // Центрирует изображение
        height: '600px',  // Вы можете настроить высоту по вашему усмотрению
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',  // Цвет текста
        textAlign: 'center',
        padding: '20px'
    };

    return (
        <div className="w-full flex-col" style={heroStyle}>
            <h1 className="mb-5 text-[40px] font-bold">{Title}</h1>
            {children}
        </div>
    );
}
