"use client"

import { useState } from "react"



const Input = () => {
    const [count , setCount] = useState(0)
  return (
    <div className="w-xl mx-auto flex flex-col gap-8">
        Client componenert
        <p></p>
        {count}
        <button className="btn" onClick={() => setCount(p => p+1)}>+</button>
    </div>
  )
}

export default Input