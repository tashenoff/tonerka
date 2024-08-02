// components/ServiceBlock.js
import service from '../data/service';

export default function ServiceBlock() {
    return (
        <section className='bg-gray-300 w-full'>
            <div className='container mx-auto my-10'>
                <ul className='grid grid-cols-3 gap-4'>
                    {service.map((item) => (
                        <li className='p-5 bg-white flex flex-col items-center' key={item.title}>
                            <a className='flex flex-col items-center text-center' href={item.href}>
                                <img src={item.image} alt={item.title} className='w-48 h-48 object-cover mb-4' />
                                <p className='text-gray-600'>{item.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
