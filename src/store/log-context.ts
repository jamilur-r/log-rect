import { createContext } from "react";

export const LogCotext = createContext<{
  state: Log[];
  dispatch: React.Dispatch<any>;
}>({
  state: [],
  dispatch: () => null,
});
