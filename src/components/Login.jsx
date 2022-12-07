import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Center,
  Heading,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[pwd,setPwd]=useState("");
  
  const submit=()=>
  {
    axios.post("https://reqres.in/api/login",{email:email,password:pwd})
    .then((r)=>{
      if(r.data.token)
      {
        alert("login successfully");
        navigate("/home");
        
      }
      else
      alert("invalid credetials")
    })
  }

  return (
    <Box bgColor={"#644ba7"} w="100%">
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            
            <Image m="auto" w="100px" h="100px" src="https://cdn1.vectorstock.com/i/1000x1000/02/55/flat-purple-rocket-ship-launched-to-the-space-vector-21650255.jpg"/>
        
            <Heading textAlign={"center"} size="md" color="#644ba7">Welcome to Bardeen</Heading>
            <Heading textAlign={"center"} size="md" >Lets log in to launch your automations.</Heading>
          <Stack spacing={4} mt="4">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=>setPwd(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={submit}
                bg={'#644ba7'}
                color={'white'}
                _hover={{
                  bg: '#644ba7',
                }}>
                Log in
              </Button>
              <Center >
      <Button
        w={'full'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
            </Stack>
          </Stack>
        </Box>
       
      </Stack>
    </Flex>
    </Box>
  );
}