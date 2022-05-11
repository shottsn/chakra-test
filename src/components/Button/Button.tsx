import { ReactNode } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export type ButtonProps = {
    variant?: 'primary' | 'secondary',
    children: ReactNode,
}

export const Button = ({children, variant}: ButtonProps) => {
    return (
        <ChakraButton
            variant={variant}
        >
            {children}
        </ChakraButton>
    )
}