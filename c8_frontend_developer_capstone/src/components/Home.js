import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Button,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import HomeHero from "./HomeHero";
import HomeHighlights from "./HomeHighlights";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#F4CE14",
      text: "#333333",
    },
  },
});

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeHighlights />
    </>
  );
};

export default Home;
