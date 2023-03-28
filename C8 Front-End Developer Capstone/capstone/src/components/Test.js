import { useState, useReducer } from "react";
import { FormControl, FormLabel, Select, Button } from "@chakra-ui/react";

const availableTimes = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00"
];

function updateTimes(state, action) {
  // Update available times based on selected date
  // For now, return the same available times regardless of the date
  return availableTimes;
}

function initializeTimes() {
  return availableTimes;
}

function Test() {
  const [selectedDate, setSelectedDate] = useState("");
  const [times, dispatch] = useReducer(updateTimes, null, initializeTimes);

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
    dispatch({ type: "updateTimes", date: event.target.value });
  }

  return (
    <div>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Select placeholder="Select date" value={selectedDate} onChange={handleDateChange}>
          <option value="2022-01-01">January 1st, 2022</option>
          <option value="2022-01-02">January 2nd, 2022</option>
          <option value="2022-01-03">January 3rd, 2022</option>
        </Select>
      </FormControl>
      <BookingForm times={times} />
    </div>
  );
}

function BookingForm({ times }) {
  const [selectedTime, setSelectedTime] = useState("");

  function handleTimeChange(event) {
    setSelectedTime(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Selected time: ${selectedTime}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Time</FormLabel>
        <Select placeholder="Select time" value={selectedTime} onChange={handleTimeChange}>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}


export default Test;
