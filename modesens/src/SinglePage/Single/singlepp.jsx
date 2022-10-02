import { Flex, Box, Image, Text, Select, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

// const statusFromLS = JSON.parse(localStorage.getItem("loginStatus"))
// console.log(statusFromLS);

const SingleItem = () => {
  const [qty, setQty] = useState(1);
  // const navigate=useNaviagte()

  const handleInc = () => {
    setQty(qty + 1);
  };

  const handleDec = () => {
    setQty(qty - 1);
  };
  let storage = [] || JSON.stringify(localStorage.getItem("storage"));
  const handleLocalStorage = (elem) => {
    console.log("elem", elem);
    storage.push(elem);
    localStorage.setItem("storage", JSON.stringify(storage));
  };

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  console.log("ekfoew", id);
  useEffect(() => {
    getData(
      `https://warm-falls-74936.herokuapp.com/api/products?id=${id}`
    ).then(
      (res) => setProductDetails(res)
      // console.log(res)
    );
  }, [id]);

  console.log(productDetails);

  return (
    <>
      <Flex padding="80px">
        <Box
          border="1px solid white"
          w="600px"
          h="500px"
          key={productDetails.id}
        >
          {productDetails &&
            productDetails.map((item) => (
              <Image src={item.image} h="100%"></Image>
            ))}
        </Box>
        <Box border="1px solid white" w="600px" padding="30px">
          {productDetails &&
            productDetails.map((item) => (
              <Box>
                <Text fontSize="27px" fontWeight="800">
                  {item.brand}
                </Text>
                <Text
                  mt="10px"
                  color="#FF6F61"
                  fontSize="25px"
                  fontWeight="500"
                >
                  ₹{qty * item.price}
                </Text>
                <Text
                  mt="10px"
                  color="#FF6F61"
                  fontSize="25px"
                  fontWeight="500"
                >
                  ₹{item.description}
                </Text>

                <Text marginTop="30px">Size</Text>
                <Select mt="20px" placeholder="Choose An Option" w="250px">
                  <option value="l">L</option>
                  <option value="m">M</option>
                  <option value="s">S</option>
                  <option value="xl">XL</option>
                  <option value="xxl">XXL</option>
                </Select>

                <Box
                  mt="15px"
                  display="flex"
                  border="1px solid white"
                  width="450px"
                  justifyContent="space-around"
                >
                  <Box
                    mt="10px"
                    display="flex"
                    border="1px solid gray"
                    w="150px"
                    justifyContent="space-between"
                    textAlign="center"
                  >
                    <Button
                      colorScheme="blue"
                      fontSize="20px"
                      mt="8px"
                      backgroundColor="transparent"
                      disabled={qty === 1}
                      onClick={handleDec}
                    >
                      -
                    </Button>

                    <Text fontSize="25px" mt="10px">
                      {qty}
                    </Text>
                    <Button
                      colorScheme="blue"
                      fontSize="20px"
                      mt="8px"
                      backgroundColor="transparent"
                      onClick={handleInc}
                    >
                      +
                    </Button>
                  </Box>
                  <Link to="/cart">
                    <Button
                      mt="18px"
                      colorScheme="blue"
                      onClick={() => handleLocalStorage(item)}
>
                      Add to Cart
                    </Button>
                  </Link>
                  {/* <Button mt="18px" colorScheme="blue">Add to Wishlist</Button> */}
                </Box>
                <Text marginTop="20px">Categories: Clothing</Text>
                <Box
                  marginTop="20px"
                  display="flex"
                  border="1px solid white"
                  width="200px"
                  justifyContent="space-around"
                >
                  <Text ml="-10px" mt="5px">
                    Share:{" "}
                  </Text>
                  <Image
                    w="30px"
                    h="30px"
                    src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png"
                    alt="fb"
                  ></Image>
                  <Image
                    w="30px"
                    h="30px"
                    src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png"
                    alt="insta"
                  ></Image>
                  <Image
                    w="30px"
                    h="30px"
                    src="https://cdn-icons-png.flaticon.com/512/4628/4628695.png"
                    alt="twitter"
                  ></Image>
                </Box>
              </Box>
            ))}
        </Box>
      </Flex>
    </>
  );
};

export default SingleItem;

// import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { Image, Text, Heading, Button, Box, Grid } from "@chakra-ui/react"

// const getData = (url) => {
//     return fetch(url).then((res) => res.json())
// }
// export default function SingleItem() {
//     const [post, setpost] = useState([])
//     const { id } = useParams()

//     useEffect(() => {
//         getData(`https://warm-falls-74936.herokuapp.com/api/products/${id}`).then((res) =>
//             // console.log(res),
//             setpost(res)
//         )

//         }
//     }, [id]

//     console.log(post)

//     return (
//         <div>
//  <Box>
//                 <Grid gridTemplateColumns="repeat(2, 1fr)" border="2px solid black" gap={2}>

//                     <Box>
//                         <Image  src={post.image} />
//                     </Box>

//                     <Box>
//                         <Heading>{post.brand}</Heading>
//                         <Text>{post.description}</Text>
//                         <Text>{post.price}</Text>
//                         <Button>ADD TO CART</Button>
//                         </Box>
//                         </Grid></Box>

//         </div>
//     )
//
