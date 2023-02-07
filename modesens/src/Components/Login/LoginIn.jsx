import {
  useToast,
  Input,
  Box,
  Heading,
  Button,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
 
  Tooltip
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const { isAuth, setAuth } = useContext(AuthContext);

  if (isAuth) {
    // return <Navigate to="/" />;
  }
  const handleClick = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);

    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/");
    setAuth(!isAuth);
  };
  const inputCSS = {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    boxSizing: "borderBox",
    marginTop: "6px",
    marginBottom: "16px",
    fontSize: "14px",
  };
  const handleLogOut=()=>{
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
<div>
  <Button  colorScheme='teal'  onClick={handleLogOut}   ml={1}    display="block"    >Log Out</Button>
    <Box
      margin={"auto"}
      width={{ base: "80%", sm: "80%", md: "50%", lg: "35%" }}
      mt="4rem"
      mb="4rem"
     
    >
   
      <Box
        padding={"20px"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        <form margin="auto" padding="20px" borderRadius="5px" height={"90vh"}>
          <Heading
            fontSize={{ base: "3xl", sm: "1xl", md: "1xl", lg: "1xl" }}
            fontFamily={"body"}
            mt="1rem"
            mb="2rem"
            textAlign={"center"}
            color="black"
            fontStyle="italic"
            _hover={{
              color: "#257CFF",
            }}
          >
            Login Form
          </Heading>
          <Input
            style={inputCSS}
            placeholder="Enter email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <Input
            style={inputCSS}
            placeholder="Enter Password"
            type={"password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <p
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              fontSize: "80%",
              color: "rgb(97, 97, 97)",
            }}
          >
            By logging in, I agree to the Terms & Conditions, Privacy Statement
            and Rewards Terms and Conditions.
          </p>
          <Button
            width={"100%"}
            margin={"auto"}
            marginTop={"15px"}
            onClick={handleClick}
            fontSize={"24px"}
            color="white"
            backgroundColor="#257CFF"
            _hover={{
              color: "#257CFF",
              backgroundColor: "white",
              boxShadow: "0 1px 1px 1px #257CFF",
            }}
          >
            Login
          </Button>
          <p
            style={{
              marginTop: "20px",
              fontSize: "90%",
              color: "rgb(97, 97, 97)",
              textAlign: "center",
            }}
          >
            Don't have an account?
          </p>
          <p
            style={{
              fontSize: "90%",
              color: "rgb(97, 97, 97)",
              textAlign: "center",
            }}
          >
            or continue with
          </p>
          <Flex margin={"auto"} width={"30px"} height={"30px"} gap={"10px"}>
            <img
              src="https://a.travel-assets.com/egds/marks/apple.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
            <img
              src="https://a.travel-assets.com/egds/marks/facebook.svg"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </Flex>
        </form>
      </Box>
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
    </Box>
    </div>
  );
}
