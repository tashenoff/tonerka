// components/ServiceBlock.js
import service from '../data/service';

export default function ServiceBlock({children}) {
    return (
        <section id="next-section" className='bg-gray-300 w-full'>
            <div className='container mx-auto my-10'>
                <h3 className='text-[40px] font-bold text-gray-800 uppercase text-center py-5'>Наши услуги</h3>
                <div className='grid grid-cols-3 gap-4'>
                    {service.map((item) => (
                        <div className='p-5 bg-white flex flex-col items-center justify-between rounded-lg hover:shadow-lg' key={item.title}>
                            <div className='flex flex-col items-center text-center w-full'>
                                <div className='w-full h-52 overflow-hidden'>
                                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                                </div>
                                <p className='text-gray-600 mt-4'>{item.title}</p>
                            </div>
                            {children}
                        
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
