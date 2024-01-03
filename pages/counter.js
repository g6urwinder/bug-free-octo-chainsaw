import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/actions/counterAction";

export default function Counter() {
  const count = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{JSON.stringify(count)}</span>
    </div>
  );
}
