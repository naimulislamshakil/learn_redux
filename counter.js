// 1. state
// 2. Action- increment, decrement, reset
// 3. Reducer
// 4. Store

const { createStore } = require("redux");

const Increment = "INCREMENT";
const Decrement = "DECREMENT";
const Reset = "RESET";

const initlizeState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: Increment,
  };
};
const decrementCounter = () => {
  return {
    type: Decrement,
  };
};
const resetCounter = () => {
  return {
    type: Reset,
  };
};

const actionReducer = (state = initlizeState, action) => {
  if (action.type === Increment) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === Decrement) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === Reset) {
    return {
      ...state,
      count: 0,
    };
  } else {
    return state;
  }
};

const store = createStore(actionReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
