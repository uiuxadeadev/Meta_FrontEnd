import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservations = () => {
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    numberOfDiners: Yup.number()
      .integer()
      .required("Number of Diners is required"),
    occasion: Yup.string().required("Occasion is required"),
    time: Yup.string().required("Time is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    specialRequests: Yup.string().max(
      500,
      "Special Requests must be 500 characters or less"
    ),
  });

  const timeOptions = [
    "17:00am",
    "17:30am",
    "18:00pm",
    "18:30pm",
    "19:00pm",
    "19:30pm",
    "20:00pm",
    "20:00pm",
    "20:30pm",
    "21:00pm",
  ];

  const initialValues = {
    date: null,
    numberOfDiners: "",
    occasion: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequests: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Box maxW="xl" mx="auto" mt={10} p={5}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <Field name="date">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.date && touched.date}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <DatePicker
                    id="date"
                    {...field}
                    selected={values.date}
                    minDate={new Date()}
                    dateFormat="yyyy/MM/dd"
                    onChange={(val) => setFieldValue("date", val)}
                    customInput={<Input />}
                  />
                  <FormErrorMessage>{errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="numberOfDiners">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.numberOfDiners && touched.numberOfDiners}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="numberOfDiners">
                    Number of Diners
                  </FormLabel>
                  <Input type="number" {...field} id="numberOfDiners" />
                  <FormErrorMessage>{errors.numberOfDiners}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="occasion">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.occasion && touched.occasion}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="occasion">Occasion</FormLabel>
                  <Select {...field} id="occasion">
                    <option value="">Select an Occasion</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Business Meeting">Business Meeting</option>
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Family Gathering">Family Gathering</option>
                    <option value="Other">Other</option>
                  </Select>
                  <FormErrorMessage>{errors.occasion}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="time">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.time && touched.time}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Select {...field} id="time">
                    <option value="">Select a Time</option>
                    {timeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{errors.time}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Flex direction="row">
              <Box flex={1} mr={3}>
                <Field name="firstName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={errors.firstName && touched.firstName}
                      mt={3}
                      mb={5}
                    >
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input {...field} id="firstName" />
                      <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box flex={1} ml={3}>
                <Field name="lastName">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={errors.lastName && touched.lastName}
                      mt={3}
                      mb={5}
                    >
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input {...field} id="lastName" />
                      <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Box>
            </Flex>

            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.email && touched.email}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="phoneNumber">
              {({ field, form }) => (
                <FormControl
                  isInvalid={errors.phoneNumber && touched.phoneNumber}
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                  <Input {...field} id="phoneNumber" />
                  <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="specialRequests">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    errors.specialRequests &&
                    touched.specialRequests &&
                    Boolean(form.errors.specialRequests)
                  }
                  mt={3}
                  mb={5}
                >
                  <FormLabel htmlFor="specialRequests">
                    Special Requests (max 500 characters)
                  </FormLabel>
                  <Textarea
                    {...field}
                    id="specialRequests"
                    maxLength={500}
                    placeholder="Enter any special requests here..."
                  />
                  <FormErrorMessage>{errors.specialRequests}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              mt={10}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Reservations;
