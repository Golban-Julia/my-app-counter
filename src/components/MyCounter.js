import { memo } from 'react';
import useCounter from "../hooks/useCounter";
import { Button } from '@chakra-ui/react';
import { Input, HStack } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FormControl } from '@chakra-ui/react';



const MyCounter = () => {
    const { count, increment, decrement, isDisabledButton, handleInputChange } = useCounter(1);
    console.log('render Counter');

    return (
        
        <HStack spacing='20px' p={4}>

            <FormControl>
                <Button onClick={decrement} size='lg' variant='solid' colorScheme='gray'  disabled={isDisabledButton} mr={6}>
                    <MinusIcon />
                </Button>

                <Input htmlSize={4} type='text' width='auto' placeholder={count} mr={4} size='lg' value={count} onChange={handleInputChange} />
                <Button onClick={increment} variant='solid' colorScheme='gray' size='lg' ml={2}>
                    <AddIcon />
                </Button>
            
            </FormControl>
            
          </HStack>
    );
};

 
export default memo(MyCounter);