import React from 'react';
import { useTodoList } from '../hooks/useTodoList';

const TodoList = () => {
    const {data : todos, isLoading, isError} = useTodoList();
    //return isLoading && <h1>Loading....</h1>
    //return isError && <h1>Error....</h1>
    console.log('todos', todos);
  return (
    <div>
        <p>TodoList</p>
       {todos && todos?.map((todo)=><p>{todo.title}</p>)}
    </div>
  )
}

export default TodoList