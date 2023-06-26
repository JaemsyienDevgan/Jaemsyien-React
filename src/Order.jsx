import { useState } from "react"

const Order = () => {
    const [count, setCount] = useState(0)
    console.log(count)

    return(
        <>
        <h1>INI HALAMAN ORDER</h1>

        <button 
            onClick={() =>{
                setCount(count+1)
            }}
            >
            count: {count}
        </button>
        </>
    )
} 
export default Order