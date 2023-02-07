import Axios from "./axios";
import { useState, useEffect, useContext } from "react";
import { Button, Grid, Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/sidebar";



export default function GetAllProducts() {
  const [gender,setGender]=useState(null);
  const [category,setCategory]=useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    console.log("id",id)
  };
const handleGender=(payload)=>{setGender(payload)}
const handleCategory=(payload)=>{setCategory(payload)}
useEffect(() => {
    Axios({ page, limit: 10,gender,category }).then((res) =>{ 
      
      setPost(res.data)});
  }, [page,gender,category]);

  return (
    <div>
      <SideBar handleGender={handleGender} handleCategory={handleCategory} />
      <Grid 
        gridTemplateColumns={{ base: "repeat(3,1fr)" }}
        ml="30px"
        lineHeight={4}
        boxShadow="xs"
        gap={3}
        mt={5}
        mb={5}
        p={5}
        border="1px solid gray"
        
      >
        {post.map((item) => (
          <div  key={item.id}>
            <Box mt={3}>
              <img
                src={item.image}
                alt=""
                style={{
                  width: "50vw",
                  height:"40vh",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              />
            </Box>
            <Box mt={3}>
              <Heading as="h6" size="xs">
                {item.brand}
                <br />
              </Heading>
            </Box>

            <Box mt={2}>
              <Text as="cite">{item.description} </Text>
            </Box>

            <Box mt={2}>{item.price}</Box>
            <Box mt={2} mb={2}>
              <Button
                display="block"
                margin="auto"
                colorScheme="blue"
                onClick={() => handleClick(item.id)}
              >
                View More
              </Button>
            </Box>
          </div>
        ))}
      </Grid>

      <Box mt={5}>
        <Button
          colorScheme="blue"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREVIOUS
        </Button>
        <Button colorScheme="blue">{page}</Button>
        <Button
          colorScheme="blue"
          disabled={page === 4}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </Button>
      </Box>
    </div>
  );
}
