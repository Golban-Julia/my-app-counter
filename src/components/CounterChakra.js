import { memo } from 'react';
import { Button } from '@chakra-ui/react';
import { Input, HStack } from '@chakra-ui/react';
import { useNumberInput } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';



const CounterChakra = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 1000,
            
        })

    const increment = getIncrementButtonProps()
    const decrement = getDecrementButtonProps()
    const input = getInputProps()

    console.log('render CounterChakra')

    return (
        <HStack maxW='320px' spacing='20px' p={4}>
            <Button {...decrement} size='lg'><MinusIcon/></Button>
            <Input {...input} size='lg' htmlSize={4} width='auto'/>
            <Button {...increment} size='lg'><AddIcon/></Button>
        </HStack>
    )
};

export default memo(CounterChakra);