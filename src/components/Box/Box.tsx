import { ReactNode } from 'react';
import { Box as ChakraBox } from '@chakra-ui/react';

export type BoxProps = {
    p?: string,
    children: ReactNode,
}

export const Box = ({children, p}: BoxProps) => {
    return (
        <ChakraBox
            p={p}
        >
            {children}
        </ChakraBox>
    )
};