import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import ReservationConfirmed from "./components/ReservationConfirmed";
import Order from "./components/Order";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Test from "./components/Test";

function App() {
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
        <AlertProvider>
          <main>
            <Router>
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order" element={<Order />} />
                <Route path="/test" element={<Test />} />
                <Route
                  path="/ReservationConfirmed"
                  element={<ReservationConfirmed />}
                />
              </Routes>
              <Footer />
              <Alert />
            </Router>
          </main>
        </AlertProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
