import React from "react"

export default function UseEffect() {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {

    })

    return (
        <>
            <div>
                <h2>The count is {count}</h2>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            </div>
        </>
    )
}