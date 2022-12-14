import { useState } from "react";


const useCounter = (defaultValue = 1 ) => {
    const [count, setCount] = useState(defaultValue );
    
    const increment = () => setCount((prevState) => prevState + 1);

    const decrement = () => setCount((prevState) => prevState - 1);

    if (count <= 0) { 
        setCount(defaultValue)
    };

    console.log(count);

    return {
        count,
        increment,
        decrement,
        setCount,
    };
};

export default useCounter;