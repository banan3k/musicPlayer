export const INCREMENT_ACTION = "INCREMENT";
export const DECREMENT_ACTION = "DECREMENT";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const increment = () => {
  return { type: INCREMENT_ACTION };
};

export const decrement = () => {
  return { type: DECREMENT_ACTION };
};
