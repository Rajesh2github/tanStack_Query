import { useQuery } from "@tanstack/react-query";

export const usePosts = (userId) => {
    const fetchPost = async () => {
        try {
            const res = await fetch(userId ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}` : `https://jsonplaceholder.typicode.com/posts`)
            return res.json();
        } catch (error) {
            throw new Error(' Failed to fetch posts');
        }
    }
    return useQuery({
        queryKey: userId ? ['user',userId,'post'] : ['post'],
        queryFn: fetchPost,
        retry: 1,
        cacheTime: 1000,
        refetchOnWindowFocus: false,
    });
} 