import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { albums } from "./store/data";

const mockStore = configureStore([]);

describe("App Component", () => {
  it("should render the App component with the Counter component", () => {
    const initialState = { app: { albums: albums } };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText("Your Albums")).toBeInTheDocument();
  });
});
