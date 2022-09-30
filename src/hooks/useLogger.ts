import { useContext } from "react";
import { LogCotext } from "../store/log-context";

export default () => {
  const { dispatch } = useContext(LogCotext);

  function logger({ type, data, name }: LogAddDTO) {
    dispatch({
      type: "ADD_LOG",
      payload: {
        name,
        type,
        data,
        timestamp: new Date(),
      },
    });
  }

  return { logger };
};
