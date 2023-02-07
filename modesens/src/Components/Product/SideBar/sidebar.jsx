import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
} from "@chakra-ui/react";
import Axios from "../ALLProducts/axios";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const DataDisplay = () => {
  return axios.get("https://modesens-api.onrender.com/products");
};

export default function SideBar({ handleGender,handleCategory }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [data, setdata] = useState([]);
  useEffect(() => {
    DataDisplay().then((res) => setdata("real data", res.data));
  });

  const handleMale = () => {
    handleGender("male");
  };

  const handleFEMALE = () => {
    handleGender("female");
  };
  const handleKids = () => {
    handleGender("kids");
  };

  const handleCloth = () => {
   handleCategory("clothing")
  };

  const handleShoes = () => {
    handleCategory("Shoes")
  };

  const handlePerfume = () => {
    handleCategory("perfume")
  };

  const handleBeauty = () => {
    handleCategory("beauty")
  };

  const handleTom = () => {
    Axios({ category: "TOM FORD" }).then((res) => console.log(res.data));
  };
  const handleAttico = () => {
    Axios({ category: "ATTICO" }).then((res) => console.log(res.data));
  };

  const handleMaison = () => {
    Axios({ category: "MAISON FRANCIS" }).then((res) => console.log(res.data));
  };

  const handleGucci = () => {
    Axios({ category: "GUCCI" }).then((res) => console.log(res.data));
  };

  const handleNike = () => {
    Axios({ category: "NIKE" }).then((res) => console.log(res.data));
  };

  const handleBurberry = () => {
    Axios({ category: "BURBERRY" }).then((res) => console.log(res.data));
  };

  const handleJim = () => {
    Axios({ category: "JIMMY CHOO" }).then((res) => console.log(res.data));
  };

  const handleChole = () => {
    Axios({ category: "CHOLE" }).then((res) => console.log(res.data));
  };

  const handleIce = () => {
    Axios({ category: "ICECREAM" }).then((res) => console.log(res.data));
  };

  return (
    <>
      <Box mt={6}>
        <Button
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          display="block"
          ml={5}
        >
          FILTER
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FILTER</DrawerHeader>

          <DrawerBody>
            <Text>FILTER </Text>

            <Box>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Gender
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleMale}>Men</MenuItem>
                  <MenuItem onClick={handleFEMALE}>Women</MenuItem>
                  <MenuItem onClick={handleKids}>Kids</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box mt="30px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Category
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleCloth}>clothing</MenuItem>
                  <MenuItem onClick={handleShoes}>shoes</MenuItem>
                  <MenuItem onClick={handlePerfume}>perfume</MenuItem>
                  <MenuItem onClick={handleBeauty}>beauty</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box mt="30px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Brand
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleAttico}>ATTICO</MenuItem>
                  <MenuItem onClick={handleBurberry}>BURBERRY</MenuItem>
                  <MenuItem onClick={handleJim}>JIMMY CHOO</MenuItem>
                  <MenuItem onClick={handleChole}>CHOLE</MenuItem>
                  <MenuItem onClick={handleGucci}>GUCCI</MenuItem>
                  <MenuItem onClick={handleMaison}>MAISON FRANCIS</MenuItem>
                  <MenuItem onClick={handleNike}>NIKE</MenuItem>
                  <MenuItem onClick={handleTom}>TOM FORD</MenuItem>
                  <MenuItem onClick={handleIce}>ICECREAM</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
