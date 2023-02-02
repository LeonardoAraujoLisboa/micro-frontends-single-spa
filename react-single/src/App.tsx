import React, { useState } from 'react'

const App = ({name}) => {
    const [counter, setCounter] = useState(0)

    const handleClick = (type:number) => {
        setCounter(oldCounter => oldCounter + type)
    }

  return (
    <>
        <h1>{name}</h1>
        <h3>Counter: {counter}</h3>
        <button onClick={() => handleClick(-1)}>Decrementar</button>
        <button onClick={() => handleClick(1)}>Incrementar</button>
    </>
  )
}

export default App