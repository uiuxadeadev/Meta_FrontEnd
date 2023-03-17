import React from "react";
import{ Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => props.setActivePage("Home")}>Home</li>
          <li onClick={() => props.setActivePage("About")}>About</li>
          <li onClick={() => props.setActivePage("Menu")}>Menu</li>
          <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
