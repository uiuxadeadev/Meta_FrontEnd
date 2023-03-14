import "./App.css";
// import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";


function App() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    const element = document.getElementById(menu);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div className="App">
      <nav>
        <ul>
          <li className={activeMenu === 'Home' ? 'active' : ''} onClick={() => handleMenuClick('Home')}>Home</li>
          <li className={activeMenu === 'About' ? 'active' : ''} onClick={() => handleMenuClick('About')}>About</li>
          <li className={activeMenu === 'Menu' ? 'active' : ''} onClick={() => handleMenuClick('Menu')}>Menu</li>
          <li className={activeMenu === 'Reservations' ? 'active' : ''} onClick={() => handleMenuClick('Reservations')}>Reservations</li>
          <li className={activeMenu === 'Order online' ? 'active' : ''} onClick={() => handleMenuClick('Order online')}>Order online</li>
        </ul>
      </nav>
      <section id="Home">
        <h1>Welcome to our restaurant</h1>
        <p>Our food is delicious and our service is outstanding. Come and try it for yourself!</p>
      </section>
      <section id="About">
        <h2>About us</h2>
        <p>We are a family-owned restaurant that has been serving delicious food for over 20 years. Our menu features a variety of dishes from around the world.</p>
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
    </div>

      
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
