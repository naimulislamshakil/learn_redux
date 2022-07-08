// you can use constent Variable.
const Increment = "INCREMENT";
const Decrement = "DECREMENT";

// state
// How to decleare a redux state?
const initCounterState = {
  count: 0,
};
const initUserState = {
  user: [
    {
      name: "Naimul Islam",
      Age: 23,
    },
  ],
};

// Action
// Action is a type of object.
// It has a two type of things:
//   1. type,
//   2.Payload

const incressAction = (number) => {
  // You can Decleare a variable and store INCREMENT.
  // Follow 2 number line.
  return {
    type: Increment,
  };
};
const decressAction = (number) => {
  // You can Decleare a variable and store DECREMENT.
  // Follow 3 number line.
  return {
    type: Decrement,
  };
};

// Create a Reducers for counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case Increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case Decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state.count;
  }
};
