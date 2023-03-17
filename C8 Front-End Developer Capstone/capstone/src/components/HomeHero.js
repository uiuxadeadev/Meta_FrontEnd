import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Button,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import restaurantFood from "../assets/images/restauranfood.jpg";

const HomeHero = () => {
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
            >
              Reserve a Table
            </Button>
            {/* <Button bg="brand.500" color="brand.text" mt="4">
              Reserve a Table
            </Button> */}
          </Box>
          <Spacer />
          <Box>
            {/* <AspectRatio maxW="400px" ratio={375 / 400}>
              <Image
                src={restaurantFood}
                alt="Restaurant logo"
                objectFit="cover"
                w="375px"
                h="400px"
                borderRadius="0.625rem"
                position="relative"
                top="50px"
              />
            </AspectRatio> */}
            <Image
              src={restaurantFood}
              alt="Restaurant logo"
              //   maxW="375px"
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
