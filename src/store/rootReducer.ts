import { combineReducers } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";

const rootReducer = combineReducers({
  transactions: transactionsReducer, // Ensure transactions slice is here
});

export default rootReducer;
