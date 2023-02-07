import {
  Grid,
  Box,
  Text,
  Image,
  Button,
  Heading,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getCartItem = async () => {
  const data = (await JSON.parse(localStorage.getItem("storage"))) || [];
  return data;
};

export default function CartData() {
  const [cartItem, setCartItem] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    getCartItem().then((res) => {
      setCartItem(res);
      setCartTotal(res.reduce((a, b) => a + b.price, 0));
    });
  }, []);

  const Remove = (item) => {
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Remove product from cart !!!</AlertTitle>
      <AlertDescription>Click on the below button to continue</AlertDescription>
    </Alert>;
   let newCartItem= cartItem.filter(elem=>item!=elem.id)
  setCartItem(newCartItem);
  setCartTotal(newCartItem.reduce((a, b) => a + b.price, 0));
  localStorage.setItem('storage', JSON.stringify(newCartItem))
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          gap: "5px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            width: "60%",
          }}
        >
          {cartItem?.map((item) => {
            return (
              <Box>
                <Box>
                  {" "}
                  <img src={item.image} alt="" />
                </Box>
                <Box>
                  {" "}
                  <Text>{item.brand}</Text>
                </Box>
                <Box>
                  {" "}
                  <Text>{item.description}</Text>
                </Box>
                <Box>
                  {" "}
                  <Text>{item.price}</Text>
                </Box>
                <Box>
                  <Button colorScheme="blue" onClick={() => Remove(item.id)}>
                    Remove
                  </Button>
                </Box>
              </Box>
            );
          })}
        </div>

        <div
          style={{
            width: "70%",
            height: "250px",
            padding: "15px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <h2>CART TOTAL</h2>
          <Text as="i" color="green" mt={3}>
            Total amount payable is just Rs. {cartTotal}
          </Text>

          <Link to="/pay">
            <Button display="block" colorScheme="blue" margin="auto" mt={10} >
              CHECK OUT
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
