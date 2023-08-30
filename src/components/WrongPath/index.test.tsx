import { render, fireEvent } from "@testing-library/react";
import WrongPath from "./";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

describe("Counter Component", () => {
  it("should render 404", () => {
    const initialState = { counter: { count: 0 } };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <WrongPath />
      </Provider>
    );

    expect(getByText("404")).toBeInTheDocument();
  });
});
