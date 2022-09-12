import React from 'react';
import {
  ChakraProvider,
  Flex,
  theme,
  VStack,
  Text,
  Button,
  HStack,
  Input,
  Image,
  useToast,
  Box,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import logo from './img/logobs.png';
function App() {
  const toast = useToast();

  return (
    <ChakraProvider theme={theme}>
      <HStack spacing="0" width="100vw" height="100vh">
        <Flex
          height="100vh"
          width={['100%', '100%', '50%']}
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            mx="auto"
            align="left"
            spacing="5"
            width={['90%', '90%', '458px']}
          >
            <Text fontWeight="bold" fontSize="3rem" color="#121440">
              Hello !
            </Text>
            <VStack spacing="10">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
            </VStack>
            <Button
              _hover={{
                backgroundColor: '#121440',
                transform: 'scale(1.05)',
              }}
              fontSize="1.3rem"
              width="182px"
              color="white"
              backgroundColor="#121440"
              onClick={() => {
                toast({
                  title: 'Logged in successfully',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                  position: 'top',
                });
              }}
            >
              Login
            </Button>
          </VStack>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          display={['none', 'none', 'flex']}
          backgroundColor="#F9F9FC"
          height="100vh"
          width={['0', '0', '50%']}
        >
          <Image height="555px" width="493px" src={logo} />
        </Flex>
      </HStack>
    </ChakraProvider>
  );
}

export default App;
