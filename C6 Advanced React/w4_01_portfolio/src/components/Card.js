import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack align="center">
      <VStack align="left" bg="#ffffff" borderRadius="xl">
        <Image src={imageSrc} borderRadius="xl" object-fit="cover" />
        <VStack p={5} align="left">
          <Heading size="md" fontWeight="bold" color="black">
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
          <HStack color="black">
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;
