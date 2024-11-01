import AddTodo from '@/components/add-todo';
import Navbar from '@/components/Navbar';
import Todos from '@/components/todos';
import React from 'react';

const page = () => {
  return (
    <main className='flex flex-col justify-end items-center gap-y-2'>
     <p className='text-center
     mt-1 bg-black/10  p-2 text-2xl uppercase rounded w-[30%] h-[50px]'> next+Typescript</p>
      <AddTodo/>
      <Navbar/>
      <Todos/>
      
    </main>
  );
};

export default page;