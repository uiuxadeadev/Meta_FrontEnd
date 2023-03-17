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
import Reservations from "./components/Reservations";
import Order from "./components/Order";

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

      {/* <Router>
        <div className="App">
          <Navigation setActivePage={setActivePage} />
          <Home id="Home" />
          <About id="About" />
          <Menu id="Menu" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </Router> */}
      <ChakraProvider>
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
      </ChakraProvider>
    </>
  );
}

// function Navigation(props) {
//   return (
//     <nav>
//       <ul>
//         <li onClick={() => props.setActivePage("Home")}>Home</li>
//         <li onClick={() => props.setActivePage("About")}>About</li>
//         <li onClick={() => props.setActivePage("Menu")}>Menu</li>
//         <li onClick={() => props.setActivePage("Reservations")}>
//           Reservations
//         </li>
//         <li onClick={() => props.setActivePage("Order")}>Order Online</li>
//       </ul>
//     </nav>
//   );
// }

function About(props) {
  return (
    <section id={props.id}>
      <h2>About Us</h2>
      <p>
        We are a family-owned restaurant that has been serving our community for
        over 20 years.
      </p>
    </section>
  );
}

function Menu(props) {
  return (
    <section id={props.id}>
      <h2>Our Menu</h2>
      <p>Check out our delicious menu items:</p>
      <ul>
        <li>Appetizers</li>
        <li>Entrees</li>
        <li>Desserts</li>
      </ul>
    </section>
  );
}

// function Reservations(props) {
//   return (
//     <section id={props.id}>
//       <h2>Reservations</h2>
//       <p>Make a reservation to dine with us:</p>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="date" placeholder="Date" />
//         <input type="time" placeholder="Time" />
//         <button type="submit">Make Reservation</button>
//       </form>
//     </section>
//   );
// }

// function Order(props) {
//   return (
//     <section id={props.id}>
//       <h2>Order Online</h2>
//       <p>Order online for pickup or delivery:</p>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="text" placeholder="Address" />
//         <button type="submit">Place Order</button>
//       </form>
//     </section>
//   );
// }
export default App;
