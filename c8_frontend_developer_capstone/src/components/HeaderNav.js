import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const navLinks = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About" },
  { to: "/menu", name: "Menu" },
  { to: "/reservations", name: "Reservations" },
  { to: "/order", name: "Order Online" },
  { to: "/test", name: "Test" },
];

const HeaderNav = (props) => {
  return (
    <Flex as="nav" justify="space-between" align="center">
      <Flex as="ul">
        {navLinks.map((link, index) => (
          <Button
            key={index}
            as={Link}
            to={link.to}
            variant="ghost"
            colorScheme="gray"
            mr="2"
          >
            {link.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default HeaderNav;
