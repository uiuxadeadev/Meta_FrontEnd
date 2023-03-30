import React from "react";
import {
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Menu", href: "#" },
    { label: "Reservations", href: "#" },
    { label: "Order Online", href: "#" },
    { label: "Login", href: "#" },
  ];

  const contactItems = [
    { label: "1234 Main St, City, ST 12345", href: "#" },
    { label: "(123) 456-7890", href: "#" },
    { label: "info@restaurant.com", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/",
    },
  ];

  return (
    <>
      {/* <Box as="footer" bg="#333" color="white"></Box> */}

      <Box bg={useColorModeValue("gray.100", "gray.900")} py="10">
        <Stack direction="row" spacing={40} justify="center" align="start">
          <Stack spacing={4} align="start">
            <Text fontWeight="bold" fontSize="xl">
              Doormat Navigation
            </Text>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} fontSize="md">
                {item.label}
              </Link>
            ))}
          </Stack>
          <Stack spacing={4} align="start">
            <Text fontWeight="bold" fontSize="xl">
              Contact
            </Text>
            {contactItems.map((item) => (
              <Link key={item.label} href={item.href} fontSize="md">
                {item.label}
              </Link>
            ))}
          </Stack>
          <Stack spacing={4} align="start">
            <Text fontWeight="bold" fontSize="xl">
              Social Media Links
            </Text>
            <HStack spacing={2}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    aria-label={item.label}
                    icon={item.icon}
                    fontSize="xl"
                    bg="transparent"
                    _hover={{ bg: "transparent" }}
                  />
                </a>
              ))}
            </HStack>
          </Stack>
        </Stack>
        <Divider
          mt="8"
          borderColor={useColorModeValue("gray.400", "gray.600")}
        />
        <Flex justify="center" align="center" mt="8">
          <Text fontSize="sm">
            © 2023 Restaurant. All rights reserved. | Privacy Policy | Terms of
            Service
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
