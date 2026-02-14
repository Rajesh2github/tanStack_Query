import { useQuery } from "@tanstack/react-query"
import todoServices from '../services/todoServices'

export const useTodoList = ()=>{
    return useQuery({
        queryKey: ['todo'],
        queryFn: todoServices.getTodos,
        staleTime: 50000
    })
}