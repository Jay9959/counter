import { useEffect, useState } from "react";

function App() {
    const[count,setCount] = useState(0)

    useEffect(() => {
        console.log("Hi ther");
    },[count])

    return(
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button disabled={count == 0} onClick={() => setCount(count - 1)}>-</button> 
            <button disabled={count == 0} onClick={() => setCount(0)}>Reset Number</button> 
            <button onClick={() => setCount(count + 1)}>+</button> 
        </>
    )
}

export default App ;