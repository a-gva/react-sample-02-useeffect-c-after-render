import { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    const updateCount = () => {
        setCount(count + 1)
    }

    const documentTitleUpdate = () => {
        document.title = `You clicked ${count} times`
    }

    // runs after every render (update)... it accepts a function as argument... the funcion is a side effect for the state update (useSgtate, or useReducer)
    useEffect(documentTitleUpdate)

    return (
        <div>
            <button onClick={updateCount}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne
