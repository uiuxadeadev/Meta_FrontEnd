import React from "react";

const Navigation = (props) => {
  return (
    <>
    <nav>
      <ul>
        <li onClick={() => props.setActivePage("Home")}>Home</li>
        <li onClick={() => props.setActivePage("About")}>About</li>
        <li onClick={() => props.setActivePage("Menu")}>Menu</li>
        <li onClick={() => props.setActivePage("Reservations")}>
          Reservations
        </li>
        <li onClick={() => props.setActivePage("Order")}>Order Online</li>
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
