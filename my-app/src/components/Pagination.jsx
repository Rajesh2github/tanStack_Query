import React, { useState } from 'react'
import { usePostPagination } from '../hooks/usePostPagination'

export const Pagination = () => {
    const SIZE = 10;
    const [page, setPage] = useState(1);
    const { data: posts, error, isLoading } = usePostPagination((page-1)*SIZE , SIZE);
    if(error)return <p>Error</p>
    if(isLoading) return <h1> Loading....123</h1>
    return (
        <div>
            {posts?.map((post, index) => (
                <div key={index} style={{ padding: 6, border: '2px solid grey', margin: 6 }}> {post.title}</div>
            ))}
            <button disabled={page-1 > 0 ? false: true} onClick={()=>setPage(page=>page-1)}>Previous</button>
            <button onClick={()=> setPage(page=>page+1)} >Next</button>
        </div>
    )
}
