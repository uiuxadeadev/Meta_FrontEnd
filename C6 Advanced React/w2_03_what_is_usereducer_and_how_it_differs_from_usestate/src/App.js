// What is useReducer and how it differs from useState
// https://www.coursera.org/learn/advanced-react/lecture/gSMJb/what-is-usereducer-and-how-it-differs-from-usestate

import React, { useReducer } from "react";
import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 5000 };
  return state;
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <VStack w="1024px" p={5} alignItems="flex-start">
        <Heading as="h1">Wallet: {state.money}</Heading>
        <Box p={6} rounded="md" w="100%" m={5}>
          <Button m={5} onClick={() => dispatch({ type: "buy_ingredients" })}>
            Shopping for veggies!
          </Button>
          <Button m={5} onClick={() => dispatch({ type: "sell_a_meal" })}>
            Serve a meal to the customer
          </Button>
          <Button m={5} onClick={() => dispatch({ type: "celebrity_visit" })}>
            Celebrity visit
          </Button>
        </Box>
      </VStack>
    </>
  );
}

export default App;
