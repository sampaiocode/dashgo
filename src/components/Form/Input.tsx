import { forwardRef } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={rest.name}>{label}</FormLabel>}

      <ChakraInput
        {...rest}
        id={rest.name}
        ref={ref}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
      />
    </FormControl>
  );
});
