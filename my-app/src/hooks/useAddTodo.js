import { useMutation, useQueryClient } from '@tanstack/react-query';
import {CACHE_KEY_TODO} from '../constent/constent';
import todoServices from '../services/todoServices'


const useAddTodo = (cb)=>{
 const queryClient = useQueryClient();
    return useMutation({
        mutationFn: todoServices.addTodo,
            onMutate: (newTodo)=>{
                //console.log(savedTodo)
                // APPROACH 1 invelidationg the cache
                // queryClient.invalidateQueries({
                //     queryKey:CACHE_KEY_TODO
                // })

                // Approach 2 update the cache
                const previousTodos = queryClient.getQueryData(CACHE_KEY_TODO) || [];
                queryClient.setQueriesData(CACHE_KEY_TODO, todos => [newTodo, ...todos])
                cb();
                return {previousTodos};
            },
            onSuccess:(savedTodo, newTodo)=>{
                queryClient.setQueriesData(CACHE_KEY_TODO, todos => todos.map(todo=> todo === newTodo ? savedTodo : todo))
            },
            onError:(Error, newTodo, context)=>{
                if(!context)return;
                queryClient.setQueryData(CACHE_KEY_TODO, context.previousTodos);
            }
            
   
    })
}

export default useAddTodo;