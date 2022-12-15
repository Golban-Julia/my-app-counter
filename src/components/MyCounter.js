import { memo } from 'react';
import useCounter from "../hooks/useCounter";
import {IconButton } from '@chakra-ui/react';
import { Input, HStack } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FormControl } from '@chakra-ui/react';



const MyCounter = () => {
    const { count, increment, decrement, setCount, initialValue } = useCounter(1);
    console.log('render Counter');
    const isDisabledButton = count <= 1;

    const handleChange = ({target: {value}}) => {
      if (value !== '' && value < initialValue) {
      setCount(initialValue);
      return;
      }
    
    setCount(value)
  };
        
    
    

    return (
        
        <HStack spacing='20px' p={4}>

            <FormControl>
                <IconButton icon={<MinusIcon />} onClick={decrement} size='lg' variant='solid' colorScheme='gray'  disabled={isDisabledButton} mr={6}>
                </IconButton>

                <Input htmlSize={4} type='text' width='auto' placeholder={count} mr={4} size='lg' value={count} onChange={handleChange} />
                <IconButton icon={<AddIcon />} onClick={increment} variant='solid' colorScheme='gray' size='lg' ml={2}>
                </IconButton>
            
            </FormControl>
            
          </HStack>
    );
};

 
export default memo(MyCounter);