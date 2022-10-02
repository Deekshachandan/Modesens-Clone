
// import  "./Login.css"
import {Navigate, useNavigate} from "react-router-dom"
import { useContext, useState } from 'react'
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
  Heading,
  Text,

    Grid,
    Image,
    useToast 

} from '@chakra-ui/react'
import { AuthContext } from "../../Context/AuthContext";


export default function Login(){
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('')
    const toast = useToast()
    const navigate = useNavigate();

const {isAuth ,setAuth}=useContext(AuthContext)

if(isAuth) {
  return <Navigate to='/' />
}
    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd);
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          navigate("/")
          setAuth(!isAuth)

     }



return(

    <div>
<Grid w="80%" m="auto" gridTemplateColumns={{base:"repeat(2,1fr)"}} >

<Box>
    <Image  src="https://scontent.fjai2-1.fna.fbcdn.net/v/t39.30808-6/279087540_5292920780728575_8682271790268398600_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4_HftJbNNUAAX9SUXyy&_nc_ht=scontent.fjai2-1.fna&oh=00_AT-UV9T_8n_-pxTF9qEjW5Vg9Y6vrwpxnX7SBqyhMjkMRA&oe=6339BC2E"  boxSize='600px' mt={12} />
</Box>

<Box>
<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}

      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"     
               value={name}
            onChange={(e) => setName(e.target.value)}          />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"    
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                {/* <Checkbox>Remember me</Checkbox> */}
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handle}
                _hover={{
                  bg: 'blue.500',

                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        {localStorage.getItem('Name') && (
           <div>
              <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
           <div>
                <p>{localStorage.getItem('Password')}</p>
            </div>
        )}


          {/* {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )} */}








    </Box>
</Grid>
</div>







)
}


















