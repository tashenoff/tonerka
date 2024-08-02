// components/Navbar.js
import data from '../data/data';
import Btn from './btn'


export default function Navbar() {
    return (
        <nav className='bg-blue-500'>
            <div className="container mx-auto flex justify-between items-center">
                <ul className='flex py-5'>
                    {data.map((item) => (
                        <li className='px-5' key={item.href}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center'>
                    <p className='mr-5'>Консультация без выходных</p>
                    <a className='pr-2' href=''>8(708)9564055</a>
                    <Btn text='Написать в WP' />
                </div>

            </div>


        </nav>
    );
}
