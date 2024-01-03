const initialState = {
  value: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    default:
      return { value: state.value };
  }
};
