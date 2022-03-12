import React,{useState} from 'react'

export const Counter = () => {
    let [count,setCount]=useState(0);
    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
      setCount(count-1)
    }
    const double=()=>{
      setCount(2*count)
    }
    // function changeCount(val){
    //     setCount((prev)=>{
    //         return prev+val
    //     })
    // }
    //setCount also accepts callback function
    // if(count>5&&count<=50){
    //     return <h1>counter should be between 0 and 10</h1>
    // }
  return (
    <div>
        <h1>
        Counter:{count}
        </h1>
        <button onClick={inc}>INCREMENT</button>
        <button onClick={dec}>DECREMENT</button>
        <button onClick={double}>DOUBLE</button>
        {/* { count<=10000 && <button onClick={()=>setCount(count-1)}>SUB</button>} */}
    </div>
  )
}
