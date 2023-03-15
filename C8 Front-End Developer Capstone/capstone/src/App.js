import "./App.css";
// import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import Header from "./component/Header";
import logo from "./assets/Logo.svg";

function About() {
  return (
    <>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
    </>
  );
}

function Menu() {
  return (
    <div>
      <h1>This weeks specials!</h1>
      <p>This is the Menu page content.</p>
    </div>
  );
}

function Reservations() {
  return (
    <div>
      <h1>Reservations</h1>
      <p>This is the Reservations page content.</p>
    </div>
  );
}

function OrderOnline() {
  return (
    <div>
      <h1>Order Online</h1>
      <p>This is the Order Online page content.</p>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState("home");

  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const reservationsRef = useRef(null);
  const orderOnlineRef = useRef(null);

  const scrollToRef = (ref) => {
    setActivePage(ref);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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

      <div className="page" id="home" />
      <div className="App">
        {/* <Header /> */}
        <div
          style={{
            display: "flex",
            align: "center",
            justify: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              wrap: "wrap",
              padding: "1rem",
              // margin: "1rem",
            }}
          >
            <img src={logo} alt="Logo" />
          </div>
          <div
            style={{
              // display: "flex",
              padding: "1rem",
              // margin: "1rem",
            }}
          >
            <nav>
              <ul
                style={{
                  display: "flex",
                  listStyle: "none",
                  align: "center",
                  justify: "space-between",
                  wrap: "wrap",
                  padding: "1rem",
                  // margin: "1rem",
                }}
              >
                <li
                  style={{ marginRight: "1rem" }}
                  onClick={() => setActivePage("home")}
                >
                  Home
                </li>
                <li
                  style={{ marginRight: "1rem" }}
                  onClick={() => scrollToRef(aboutRef)}
                >
                  About
                </li>
                <li
                  style={{ marginRight: "1rem" }}
                  onClick={() => scrollToRef(menuRef)}
                >
                  Menu
                </li>
                <li
                  style={{ marginRight: "1rem" }}
                  onClick={() => scrollToRef(reservationsRef)}
                >
                  Reservations
                </li>
                <li
                  style={{ marginRight: "1rem" }}
                  onClick={() => scrollToRef(orderOnlineRef)}
                >
                  Order Online
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* {activePage === "home" && (
          <div className="page" id="home">
            <h1>Home Page</h1>
          </div>
        )} */}

        <div className="page" ref={aboutRef} id="about">
          {/* {activePage === "aboutRef" && <About />} */}
          <About />
        </div>
        <div className="page" ref={menuRef} id="menu">
          {/* {activePage === "menu" && <Menu />} */}
          <Menu />
        </div>
        <div className="page" ref={reservationsRef} id="reservations">
          {/* {activePage === "reservations" && <Reservations />} */}
          <Reservations />
        </div>
        <div className="page" ref={orderOnlineRef} id="order-online">
          {/* {activePage === "orderOnline" && <OrderOnline />} */}
          <OrderOnline />
        </div>
      </div>
      {/* <div>
        <section id="Home">
          <h1>Welcome to our restaurant</h1>
          <p>
            Our food is delicious and our service is outstanding. Come and try
            it for yourself!
          </p>
        </section>
        <section id="About">
          <h2>About us</h2>
          <p>
            We are a family-owned restaurant that has been serving delicious
            food for over 20 years. Our menu features a variety of dishes from
            around the world.
          </p>
        </section>
        <section id="Menu">
          <h2>Our menu</h2>
          <p>Check out our delicious menu items:</p>
          <ul>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Desserts</li>
            <li>Drinks</li>
          </ul>
        </section>
        <section id="Reservations">
          <h2>Reservations</h2>
          <p>Make a reservation today!</p>
        </section>
        <section id="Order online">
          <h2>Order online</h2>
          <p>Order our delicious food online for pickup or delivery.</p>
        </section>
      </div> */}

      {/* <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes> */}
      {/* <a href="/book" role="button">
        Book a table
      </a>

      <form>
           {" "}
        <label>
                  Number of guests:        {" "}
          <input type="number" name="guests" />
             {" "}
        </label>
            <button type="Submit">Submit</button>
      </form> */}
    </>
  );
}

export default App;
