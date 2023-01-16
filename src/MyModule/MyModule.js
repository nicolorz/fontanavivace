import React, { useState } from "react"
import './MyModule.css'


const MyModule = ({initialValue}) => {
    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => {
        setCounter(counter+1)
    }

    return <div className="MyModule">
        <h2>Il mio modulo {counter}</h2>
        <button onClick={handleClick}>somma</button>
        </div>
}

export default MyModule