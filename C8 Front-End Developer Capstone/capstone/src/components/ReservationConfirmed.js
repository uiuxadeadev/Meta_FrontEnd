import React from "react";
import { Box, Flex, Text, Spacer, Image, Button } from "@chakra-ui/react";

function ReservationConfirmed() {
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
      </Flex>
    </>
  );
}

export default ReservationConfirmed;
