import Axios from "./axios";
import { useState, useEffect } from "react";
import { Button, Grid, Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



export default function GetAllProducts({handleMale}) {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
    console.log("id",id)
  };

useEffect(() => {
    Axios({ page, limit: 10 }).then((res) => setPost(res.data));
  }, [page]);

  return (
    <div>
      <Grid
        gridTemplateColumns={{ base: "repeat(3,1fr)" }}
        ml="30px"
        lineHeight={4}
        boxShadow="xs"
        gap={3}
        mt={5}
        mb={5}
        p={5}
      >
        {post.map((item) => (
          <div>
            <Box mt={3} key={item.id}>
              <img
                src={item.image}
                alt=""
                style={{
                  width: "50%",
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
