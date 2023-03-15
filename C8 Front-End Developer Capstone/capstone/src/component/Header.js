import React, { useState, useRef } from "react";

const Header = () => {
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
      <img src="./assets/Logo.svg" alt="" />

      <nav>
        <ul>
          <li onClick={() => setActivePage("home")}>Home</li>
          <li onClick={() => scrollToRef(aboutRef)}>About</li>
          <li onClick={() => scrollToRef(menuRef)}>Menu</li>
          <li onClick={() => scrollToRef(reservationsRef)}>Reservations</li>
          <li onClick={() => scrollToRef(orderOnlineRef)}>Order Online</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
