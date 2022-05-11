import * as React from "react"
import styled from '@emotion/styled';

import {
  ChakraProvider,
  extendTheme,
  VStack
} from "@chakra-ui/react"

import {
  Box,
  Button
} from './components';

import { ButtonStyles } from "./components/Button/Button.styles";

const theme = extendTheme({
  components: {
    Button: ButtonStyles
  }
});

const ButtonStyled = styled.button`
  background: red;
  border-radius: 20px;
  padding: 8px 20px;
`;

ButtonStyled.displayName = 'Button';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p="4">
      <VStack>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Secondary</Button>
        <ButtonStyled>Pizza</ButtonStyled>
      </VStack>
    </Box>
  </ChakraProvider>
)
