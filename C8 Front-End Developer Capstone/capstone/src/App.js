import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import Order from "./components/Order";
import Footer from "./components/Footer";

import logo from "./assets/Logo.svg";

function App() {
  // const [activePage, setActivePage] = useState("Home");

  // useEffect(() => {
  //   const element = document.getElementById(activePage);
  //   element.scrollIntoView({ behavior: "smooth" });
  // }, [activePage]);

  return (
    <>
      <head>
        <meta
          name="description"
          content="Get all your sports fishing equipment at One Place Fishing. Open Monday to Friday, 9 to 5, in the Great Lake area."
        />
        <meta name="og:title" content="One Place Fishing" />
        <meta name="og:description" content="some description here" />
        <meta
          name="og:image"
          content="https://example.com/one-place-fishing-store.jpg"
        />
      </head>

      <ChakraProvider>
        <main>
          <Router>
            <Box bg="gray.200" py="2">
              <Flex
                maxW="1000px"
                mx="auto"
                my="4"
                justify="space-between"
                align="center"
              >
                <Image src={logo} alt="Restaurant logo" w="10rem" h="auto" />
                <Navigation />
              </Flex>
            </Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </Router>
          <Footer />
        </main>
      </ChakraProvider>
    </>
  );
}

export default App;
