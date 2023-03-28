import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservations = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      date: null,
      numberOfDiners: "",
      occasion: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      specialRequests: "",
    },
    onSubmit: (values) => {
      console.log(values);
      submit("https://john.com/contactme", values);
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      specialRequests: Yup.string().max(
        500,
        "Special requests cannot exceed 500 characters"
      ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      numberOfDiners: Yup.number()
        .required("Number of diners is required")
        .min(1, "Number of diners must be at least 1")
        .max(20, "Number of diners cannot exceed 20"),
      occasion: Yup.string().required("Occasion is required"),
      time: Yup.string().required("Time is required"),
      phoneNumber: Yup.string()
        .matches(
          /^[0-9]{10}$/,
          "Phone number must be 10 digits without any spaces or dashes"
        )
        .required("Phone number is required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const timeOptions = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1">Reservations</Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.date && formik.touched.date}
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <DatePicker
                  id="date"
                  selected={formik.values.date}
                  onChange={(date) => formik.setFieldValue("date", date)}
                  minDate={new Date()}
                  dateFormat="yyyy/MM/dd"
                  customInput={<Input />}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.errors.numberOfDiners && formik.touched.numberOfDiners
                }
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="numberOfDiners">Number of Diners</FormLabel>
                <Input
                  id="numberOfDiners"
                  name="numberOfDiners"
                  type="numberOfDiners"
                  placeholder="Maximum 20 people"
                  {...formik.getFieldProps("numberOfDiners")}
                />
                <FormErrorMessage>
                  {formik.errors.numberOfDiners}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.occasion && formik.touched.occasion}
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  {...formik.getFieldProps("occasion")}
                >
                  <option value="">Select an Occasion</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Business Meeting">Business Meeting</option>
                  <option value="Casual Dining">Casual Dining</option>
                  <option value="Family Gathering">Family Gathering</option>
                  <option value="Other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.errors.time && formik.touched.time}
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="time">Time</FormLabel>
                <Select id="time" name="time" {...formik.getFieldProps("time")}>
                  <option value="">Select a Time</option>
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>

              <Flex
                direction="row"
                // mx="auto"
                justify="space-between"
                align="center"
              >
                <Box flex="1" mr={3} w="500px">
                  <FormControl
                    isInvalid={
                      formik.touched.firstName && !!formik.errors.firstName
                    }
                    mt={3}
                    mb={5}
                  >
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      {...formik.getFieldProps("firstName")}
                    />
                    <FormErrorMessage>
                      {formik.errors.firstName}
                    </FormErrorMessage>
                  </FormControl>
                </Box>

                <Box flex="1" ml={3}>
                  <FormControl
                    isInvalid={
                      formik.touched.lastName && !!formik.errors.lastName
                    }
                    mt={3}
                    mb={5}
                  >
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                      id="lastName"
                      name="lastName"
                      {...formik.getFieldProps("lastName")}
                    />
                    <FormErrorMessage>
                      {formik.errors.lastName}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </Flex>

              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                }
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="phoneNumber"
                  {...formik.getFieldProps("phoneNumber")}
                />
                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  !!formik.errors.specialRequests &&
                  formik.touched.specialRequests &&
                  Boolean(formik.errors.specialRequests)
                }
                mt={3}
                mb={5}
              >
                <FormLabel htmlFor="specialRequests">
                  {" "}
                  Special Requests (max 500 characters)
                </FormLabel>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  height={250}
                  maxLength={500}
                  placeholder="Enter any special requests here..."
                  {...formik.getFieldProps("specialRequests")}
                />
                <FormErrorMessage>
                  {formik.errors.specialRequests}
                </FormErrorMessage>
              </FormControl>

              <Button
                mt={4}
                mb={4}
                // colorScheme="teal"
                isLoading={isLoading}
                type="submit"
                w="200px"
                h="60px"
                fontSize="xl"
                color="#333333"
                bg="#F4CE14"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default Reservations;
