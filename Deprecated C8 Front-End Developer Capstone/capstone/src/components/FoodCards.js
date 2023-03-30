import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import greekSalad from "../assets/images/greekSalad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemonDessert from "../assets/images/lemonDessert.jpg";

const FoodCards = () => {
  return (
    <>
      <Box
        p={4}
        w="1000px"
        maxW="1000px"
        mx="auto"
        mb="5"
        justify="space-between"
        align="center"
      >
        <SimpleGrid columns={[1, 2, 3]} spacing="75px">
          <FoodCard
            title="Greek salad"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            imageSrc={greekSalad}
          />
          <FoodCard
            title="Bruchetta"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            imageSrc={bruchetta}
          />
          <FoodCard
            title="Lemon Dessert"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            imageSrc={lemonDessert}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default FoodCards;
