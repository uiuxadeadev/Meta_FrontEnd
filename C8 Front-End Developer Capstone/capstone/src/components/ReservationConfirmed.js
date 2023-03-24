import React from "react";
import { Box, Flex, Text, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useLocation } from "react-router-dom";

function ReservationConfirmed() {
  const location = useLocation();
  const data = location.state.data;
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
          <Box h={400}>
            <Text fontSize="64px" color="#F4CE14" fontWeight="bold" mt="10">
              Booking Confirmed Successfully!!
            </Text>
            <Text fontSize="40px" fontWeight="bold" mt="4">
              Thank you very much. We're looking forward to seeing you.
            </Text>
          </Box>
        </Flex>
        <p>Your reservation for {data.firstName} has been confirmed.</p>
      </Flex>

      <FullScreenSection
        isDarkBackground
        backgroundColor="#495E57"
        py={16}
        spacing={8}
      >
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section">
            Your Reservations
          </Heading>
          <Box p={6} rounded="md" w="100%">
            <Box flex="1" mr={3}>
              {data.date.toLocaleDateString()};
            </Box>
            <Box flex="1" mr={3}>
              {data.numberOfDiners}
            </Box>
            <Box flex="1" mr={3}>
              {data.time}
            </Box>

            <Flex
              direction="row"
              // mx="auto"
              justify="space-between"
              align="center"
            >
              <Box flex="1" mr={3} w="500px">
                {data.firstName}
              </Box>

              <Box flex="1" ml={3}>
                {data.lastName}
              </Box>
            </Flex>

            <Box flex="1" mr={3}>
              {data.email}
            </Box>
            <Box flex="1" mr={3}>
              {data.phoneNumber}
            </Box>
            <Box flex="1" mr={3}>
              {data.specialRequests}
            </Box>
          </Box>
        </VStack>
      </FullScreenSection>
    </>
  );
}

export default ReservationConfirmed;
