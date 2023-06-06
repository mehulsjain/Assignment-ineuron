import { useEffect, useState } from "react"

const Counter = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {    // Update the document title using the browser API    
      document.title = `You clicked ${count} times`;  
    });

  return (
    <>
        <h1>Counter Value - {count}</h1>
        <button onClick={() => setCount(0)}>Reset Counter</button>
        <button onClick={() => setCount(count+1)}>Increase Counter</button>
        <button onClick={() => setCount(count-1)}>Decrease Counter</button>
    </>
  )
}

export default Counter