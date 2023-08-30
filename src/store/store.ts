import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducers";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    app: rootReducer,
  },
  middleware: [thunk],
});

export default store;
