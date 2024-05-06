"use client"
import React, { useState, useEffect } from 'react';
import Card, { data } from './Card';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../public/icons8-g-100.png';

export default function Dashboard() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3); 

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
        };

        
        handleResize();

        
        window.addEventListener('resize', handleResize);

       
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <header>
                <nav className="flex justify-between px-4 py-2 bg-slate-900 border border-slate-500 pb-5 text-white">
                    <div>
                       <Image src={logo} alt='logo' width={50} />
                    </div>
                    <div>
                        <button className='text-blue-600 mt-5 font-semibold' onClick={() => router.push("/signup")}>Logout</button>
                    </div>
                </nav>
            </header>
            
            <main className="p-4">
                <div className='flex justify-between'>
                    <div className='text-white'>
                        <h1>Popular 🔥</h1>
                    </div>
                    <div>
                        <button onClick={prevPage} disabled={currentPage === 1} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 disabled:bg-gray-500">
                            &lt;
                        </button>
                        <button onClick={nextPage} disabled={currentPage === totalPages} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center disabled:bg-gray-500">
                            &gt;
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center'>
                    {currentItems.map((item, index) => (
                        <Card key={index} title={item.title} heading={item.heading} image={item.image} />
                    ))}
                </div>

                <div className='flex justify-center mt-4'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)} className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-600' : 'bg-blue-300'}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
