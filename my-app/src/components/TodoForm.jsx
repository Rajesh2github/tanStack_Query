import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useRef } from 'react'
import axios from 'axios';
import useAddTodo from '../hooks/useAddTodo';
const TodoForm = () => {
    const inputRef = useRef(null);
    const cb = ()=>{if(inputRef.current) inputRef.current.value =''}
    const addTodo = useAddTodo(cb);
    return (
        <div>
            TodoForm
            {addTodo.error && <h1>{addTodo.error.message}</h1>}
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    console.log(inputRef.current.value);
                    if(inputRef.current && inputRef.current.value){
                    addTodo.mutate({
                        "userId": 1,
                        "id": 123,
                        "title": inputRef.current.value,
                        "completed": false
                    })
                }
                }
            }>
                <input type='text' ref={inputRef} />
                <button 
                disabled={addTodo.isPending}
                >
                {addTodo.isPending ? 'Adding...' : 'ADD'}
                </button>
            </form>
        </div>
    )
}

export default TodoForm