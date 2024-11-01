"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Navbar = () => {
   const searchParams=useSearchParams();
   const todosFilter=searchParams.get('todos');
   
    return (
        <nav className='flex gap-x-8 text-xl font-bold'>
            <Link href={'/'} className={todosFilter===null?'text-red-600 ':''} >All</Link>
            <Link href={'/?todos=active'} className={todosFilter==='active'?'text-red-600 ':''}>Active</Link>
            <Link href={'/?todos=completed'} className={todosFilter==='completed'?'text-red-600 ':''}>Completed</Link>
            
        </nav>
    );
};

export default Navbar;