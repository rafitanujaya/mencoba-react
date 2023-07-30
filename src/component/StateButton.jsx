import { useState } from "react";

export default function StateButton () {
    const [ count, setCount ] = useState(0);

    function handleClick () {
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>Diclick sebanyak {count} kali</button>
    )
}

