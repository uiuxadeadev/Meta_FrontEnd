import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import restaurantFood from "../assets/images/restauranfood.jpg";
// import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigateTo = useNavigate();
  function handleClick() {
    // history.push("/reservations");
    navigateTo("/reservations");
  }

  return (
    <>
      <Flex bgColor="#495E57">
        <Flex
          w="1000px"
          maxW="1000px"
          mx="auto"
          mb="5"
          justify="space-between"
          align="center"
        >
          <Box w="525px" maxW="525px">
            <Text fontSize="64px" color="#F4CE14" fontWeight="bold" mb="-4">
              Little Lemon
            </Text>
            <Text fontSize="40px" fontWeight="bold" mb="4">
              Chicago
            </Text>
            <Text fontSize="24px" mb="4">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a <b /> modern twist.
            </Text>
            <Button
              w="200px"
              h="60px"
              fontSize="xl"
              color="#333333"
              bg="#F4CE14"
              mt="4"
              onClick={handleClick}
            >
              Reserve a Table
            </Button>
          </Box>
          <Box>
            <Image
              src={restaurantFood}
              alt="Restaurant logo"
              w="375px"
              h="400px"
              borderRadius="0.625rem"
              objectFit="cover"
              position="relative"
              top="50px"
              mr="4"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeHero;
