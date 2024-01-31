import { useState } from "react";
import React from 'react';

// In this application , we have done increasing and decreasing function and also added telwind css.


const App = () => {
  const [count, setCount] = useState(10);


  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }


  return (

    <>
      <button onClick={increase} className='bg-green-400 p-4 my-10 mx-10' >click me for increase</button>
      <br />
      <h1 className='text-3xl  font-bold underline my-2 mx-28' >{count}</h1>

      <br />
      <button onClick={decrease} className="bg-green-400 p-4 mx-10 " >click me for decrease</button>
    </>
  )
}

export default App;
