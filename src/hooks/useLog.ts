import { useReducer } from "react";
import logReducer from "../store/log-reducer";

export default (initalState: Log[] = []) => {
  const [state, dispatch] = useReducer(logReducer, initalState);

  return {
    state,
    dispatch,
  };
};
