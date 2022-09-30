import * as React from "react";
import useLoggerHook from "./hooks/useLogger";
import useLog from "./hooks/useLog";
import { LogCotext } from "./store/log-context";
import Log from "./components/Log";

interface Props {
  mode: "DEV" | "PROD";
  children: React.ReactElement;
}

export const LogRect = ({ mode, children }: Props) => {
  if (mode === "DEV") {
    return (
      <LogCotext.Provider value={useLog()}>
        <Log />
        {children}
      </LogCotext.Provider>
    );
  }
  return children;
};

export const useLogger = useLoggerHook;
