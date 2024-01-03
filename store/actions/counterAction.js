import { INCREMENT, SAMPLE_ERROR } from "../types";

export const increment = () => async (dispatch) => {
  try {
    dispatch({
      type: INCREMENT,
      payload: 1,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
