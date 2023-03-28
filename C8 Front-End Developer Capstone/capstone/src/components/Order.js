import React, { useState, useReducer } from "react";
import BookingForm from "./Test";

function Order() {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);

  function initializeTimes() {
    // You can initialize the available times state here
    // For example, return an array of available times for a specific date range
    return ["10:00", "11:00", "12:00"];
  }

  function reducer(availableTimes, action) {
    // Update the available times state based on the selected date
    switch (action.type) {
      case "UPDATE_TIMES":
        return ["13:00", "14:00", "15:00"]; // Replace with your logic to update the times based on the selected date
      default:
        return availableTimes;
    }
  }

  function updateTimes() {
    dispatch({ type: "UPDATE_TIMES" });
  }

  return (
    <div>
      <h1>Table Booking App</h1>
      <BookingForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
}

export default Order;
