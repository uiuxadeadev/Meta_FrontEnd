import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import HeaderNav from "./HeaderNav";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <>
      <Box bg="gray.200" py="2">
        <Flex
          maxW="1000px"
          mx="auto"
          my="4"
          justify="space-between"
          align="center"
        >
          <Image src={logo} alt="Restaurant logo" w="10rem" h="auto" />
          <HeaderNav />
        </Flex>
      </Box>
    </>
  );
};

export default Header;
