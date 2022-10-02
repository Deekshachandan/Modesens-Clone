
import { useNavigate } from "react-router-dom"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
    Tooltip
  } from '@chakra-ui/react'
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";




export default function LogOut(){
const navigate=useNavigate()
const {isAuth, setAuth}=useContext(AuthContext)

 function logout(){
    localStorage.clear();
<Alert>
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
        Log-Out Successful
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
 Grap the best deals at lowest prices, Log-In to continue.
    </AlertDescription>
  </Alert>
    // navigate("/login")
    setAuth(!isAuth)
}


return (
    <>

    <Tooltip hasArrow label=' Are you sure, you want to log-out?' bg='red.600'>
    <Button mt="40px" onClick={logout} colorScheme="blue">LogOut</Button>
     </Tooltip>
    <div style={{marginTop:"80px", width:"100%"}}>
      <img src="https://media-exp1.licdn.com/dms/image/C4E1BAQFzct6cL-ZRvA/company-background_10000/0/1569260216353?e=2147483647&v=beta&t=H99_T46ufC2QzZpBEUhJpK6ySRWkZRzMMZyOJ8FQVnw" alt=""   
      
      style={{width:"100%", height:"600px"}}
      />
    </div>
   
    </>
)

}