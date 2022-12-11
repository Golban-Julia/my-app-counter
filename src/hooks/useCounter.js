import { useState } from "react";


const useCounter = ({ defaultValue = 1 }) => {
    const [count, setCount] = useState(defaultValue);
    const handleInputChange = (e) => setCount(e.target.value)

    const increment = () => setCount((prevState) => prevState + 1);
  
    const decrement = () => setCount((prevState) => prevState - 1);
   
    const isDisabledButton = count === 1; 
    
    return {
        count,
        increment,
        decrement,
        setCount,
        isDisabledButton,
        handleInputChange,
    };
};

export default useCounter;