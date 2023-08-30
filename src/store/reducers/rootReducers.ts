import { FETCH_DATA_SUCCESS } from "../actions";
import { initialState } from "../state";

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, title: action.payload?.title };

    default:
      return state;
  }
};

export default rootReducer;
