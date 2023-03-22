import React, { useState,useCallback } from 'react'
import {MemoizedChild} from './Child';

 const Parent = () => {
    const [count, setcount] = useState(0);
    console.log("Parent rendered!");
    const handleClick= () => {
        console.log("Clicked from Parent");
        return "Clicked!"
    }
    const memoizedClick= useCallback(handleClick,[]); // function passed as argument
  return (
    <div>Parent
        {count}
        <button onClick={()=> setcount(prevCount => prevCount+1)}>Increment</button>
        <MemoizedChild handleClick={memoizedClick} />
    </div>
  )
}
export default Parent;
