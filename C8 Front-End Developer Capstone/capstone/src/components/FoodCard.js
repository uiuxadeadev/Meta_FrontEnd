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

const FoodCard = ({ title, description, imageSrc }) => {
  return (
    <Box
      maxW={"275px"}
      w={"full"}
      bg="white"
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="275px" h="200px" />
      <Flex direction="column" justify="space-between" p={6}>
        <Stack
          align={"center"}
          justify={"space-between"}
          direction={"row"}
          mt={3}
          mb={3}
        >
          <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight">
            {title}
          </Box>
          <Text fontWeight="bold" fontSize="xl">
            $12.99
          </Text>
        </Stack>

        <Text color="gray.500" fontSize="sm" align="left">
          {description}
        </Text>
        <Stack
          align={"center"}
          justify={"space-between"}
          direction={"row"}
          mt={3}
        >
          <Badge colorScheme="green">Vegan</Badge>
        </Stack>
      </Flex>
    </Box>
  );
};

export default FoodCard;
