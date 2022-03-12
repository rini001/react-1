import React,{useState} from 'react'

export const Counter = () => {
    let [count,setCount]=useState(0);
    // const add=()=>{
    //     setCount(count+1)
    // }
    function changeCount(val){
        setCount((prev)=>{
            return prev+val
        })
    }
    //setCount also accepts callback function
    // if(count>5&&count<=50){
    //     return <h1>counter should be between 0 and 10</h1>
    // }
  return (
    <div>
        <h1>
        counter:{count}
        </h1>
        <button onClick={()=>changeCount(1)}>ADD</button>
        {/* { count<=10000 && <button onClick={()=>setCount(count-1)}>SUB</button>} */}
    </div>
  )
}
