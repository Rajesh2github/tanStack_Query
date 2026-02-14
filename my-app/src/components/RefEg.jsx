import React, { useState, useRef } from 'react'

const RefEg = () => {
    const a = useRef(10);
    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        a.current = a.current+ 10;
        //setCount(c=>c+1);
    }
    const handleClick2 = ()=>{
       
        setCount(c=>c+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <h1>{a.current}</h1>
        <button onClick={handleClick}>ref update</button>
        <button onClick={handleClick2}>state update</button>
    </div>
  )
}

export default RefEg