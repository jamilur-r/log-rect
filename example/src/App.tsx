import React, { useEffect } from "react";

import { useLogger } from "log-rect";
import "log-rect/dist/index.css";

const App = () => {
  const { logger } = useLogger();
  useEffect(() => {
    const interval = setInterval(() => {
      // random number between 0 and 2

      const random = Math.floor(Math.random() * 3);

      logger({
        type: ["INFO", "WARN", "ERROR"][random],
        data: [
          {
            name: "John Doe",
            age: 32,
            address: "1234 Main St, Anytown, USA",
            city: "Anytown",
            state: "CA",
          },
        ],
        name: "gjshef",
      });
    }, 5 * 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Log Rect</h1>
        <h2 className="sub-title">
          A react library to keep track of logs in your application the way it
          was ment to be
        </h2>

        <p>Click the icon pointed by the arrow to see logs by Log Rect</p>
        <a href="https://github.com/jamilur-r/log-rect" className="btn">
          Git Repo
        </a>
      </div>
      <button className="point-btn">Click this button ---&gt;</button>
    </div>
  );
};

export default App;
