import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useLocation } from "react-router-dom";

function ReservationConfirmed() {
  const location = useLocation();
  const data = location.state.data;
  return (
    <>
      <FullScreenSection
        isDarkBackground
        backgroundColor="#495E57"
        py={16}
        spacing={8}
      >
        <Flex
          w="1024px"
          mx="auto"
          py={10}
          direction="row"
          justify="space-between"
          align="center"
        >
          <Box maxW="450px">
            <Text fontSize="40px" color="#F4CE14" fontWeight="bold">
              Booking Confirmed Successfully!!
            </Text>
            <Text fontSize="24px" fontWeight="bold" mt="4">
              Thank you very much. We're looking forward to seeing you.
            </Text>
          </Box>

          <Spacer />

          <Box>
            <VStack p={5} alignItems="flex-start" maxW="450px">
            <Heading as="h1">Your Reservations</Heading>
            <Box py={6} rounded="md" w="100%">
              <Box flex="1">{data.date.toLocaleDateString()};</Box>
              <Box flex="1" mt={2}>
                {data.numberOfDiners}
              </Box>
              <Box flex="1" mt={2}>
                {data.time}
              </Box>

              <Flex
                direction="row"
                // mx="auto"
                justify="space-between"
                align="center"
              >
                <Box flex="1" mt={2}>
                  {data.firstName}
                </Box>

                <Box flex="1" ml={3}>
                  {data.lastName}
                </Box>
              </Flex>

              <Box flex="1" mt={2}>
                {data.email}
              </Box>
              <Box flex="1" mt={2}>
                {data.phoneNumber}
              </Box>
              <Box flex="1" mt={2}>
                {data.specialRequests}
              </Box>
            </Box>
            </VStack>
          </Box>
        </Flex>
      </FullScreenSection>
    </>
  );
}

export default ReservationConfirmed;
