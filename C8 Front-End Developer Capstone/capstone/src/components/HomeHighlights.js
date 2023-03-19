import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Stack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import FoodCards from "./FoodCards";

const HomeHighlights = () => {
  return (
    <>
      <Stack my="20" align="center">
        <Flex
          p={4}
          w="1000px"
          maxW="1000px"
          mx="auto"
          mb="10"
          justify="space-between"
          align="center"
        >
          <Box flex="1">
            <Text fontSize="36px" textAlign="left">
              This week's specials!
            </Text>
          </Box>
          <Box flex="1" textAlign="right">
            <Button
              w="200px"
              h="60px"
              fontSize="xl"
              color="#333333"
              bg="#F4CE14"
            >
              Online Menu
            </Button>
          </Box>
        </Flex>

        <FoodCards />
      </Stack>
    </>
  );
};

export default HomeHighlights;
