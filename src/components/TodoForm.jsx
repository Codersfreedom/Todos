import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/TodoSlice';

const TodoForm = () => {
    const [note,setNote] = useState('');
    const disPatch = useDispatch();

    const addNote =(e)=>{
        e.preventDefault();
        if(!note) return
        disPatch(addTodo(note));
        
        setNote('')
    }

  return (
    <form onSubmit={addNote} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={note}
        onChange={(e)=>setNote(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default TodoForm
