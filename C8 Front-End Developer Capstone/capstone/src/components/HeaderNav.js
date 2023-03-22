import React from "react";
import { Link } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const HeaderNav = (props) => {
  return (
    <>
      {/* <nav>
        <ul>
          <li onClick={() => props.setActivePage("Home")}>Home</li>
          <li onClick={() => props.setActivePage("About")}>About</li>
          <li onClick={() => props.setActivePage("Menu")}>Menu</li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>
      </nav> */}

      <Flex as="nav" justify="space-between" align="center">
        <Flex as="ul">
          <Button as={Link} to="/" variant="ghost" colorScheme="gray" mr="2">
            Home
          </Button>
          <Button
            as={Link}
            to="/about"
            variant="ghost"
            colorScheme="gray"
            mr="2"
          >
            About
          </Button>
          <Button
            as={Link}
            to="/menu"
            variant="ghost"
            colorScheme="gray"
            mr="2"
          >
            Menu
          </Button>
          <Button
            as={Link}
            to="/reservations"
            variant="ghost"
            colorScheme="gray"
            mr="2"
          >
            Reservations
          </Button>
          <Button as={Link} to="/order" variant="ghost" colorScheme="gray">
            Order Online
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HeaderNav;
