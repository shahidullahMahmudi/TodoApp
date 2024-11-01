'use client'

import { useTodos } from '@/store/todos';
import React, { FormEvent, useState } from 'react';

const AddTodo = () => {
    const [todo,setTodo]=useState('')
    const {handleAddTodo}=useTodos();
   const handlFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo);
    setTodo('');
   }

    return (
        <form onSubmit={handlFormSubmit} className=''>
 <input type='text' placeholder='Write your todo' name='' value={todo} onChange={(e)=>setTodo(e.target.value)} className='border border-black'/>
   <button  className='border px-2 py-1 bg-orange-500 font-bold rounded' >ADD</button>         
        </form>
    );
};

export default AddTodo;