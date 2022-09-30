import React, { useEffect } from "react";

import { useLogger } from "log-rect";
import "log-rect/dist/index.css";

const App = () => {
  const { logger } = useLogger();

  useEffect(() => {
    const interval = setInterval(() => {
      logger({ type: "INFO", data: ["Hello World"], name: "gjshef" });
    }, 5 * 1000);

    return () => clearInterval(interval);
  });

  return <div></div>;
};

export default App;
