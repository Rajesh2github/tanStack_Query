import { useQuery } from "@tanstack/react-query";

export const usePostPagination =  (page, size)=>{
    const fetchPost = async ()=>{
        try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${size}`);
        return res.json();
        }catch(error){
            throw new Error('Pagination post failed', error);
        }
    }
     return useQuery({
        queryKey : ['post',page,size ],
        queryFn: fetchPost,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    })
} 