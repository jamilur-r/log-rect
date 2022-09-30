# log-rect

> A react library to beautify your logs

[![NPM](https://img.shields.io/npm/v/log-rect.svg)](https://www.npmjs.com/package/log-rect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save log-rect
```

## Usage

```jsx
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LogRect } from "log-rect";

ReactDOM.render(
  <LogRect mode="DEV">
    <App />
  </LogRect>,

  document.getElementById("root")
);
```

```jsx
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

  return <div>My React App</div>;
};

export default App;
```

## Props -> LogRect

1. mode -> "DEV" || "PROD" ---> if mode === 'PROD' log panel will not be shown

## Data type for logs

1. name: string ---> not required
2. type: 'INFO' | 'ERROR' | 'WARN' --> defines different log level
3. data: any ---> actual content to show within log/ log content

## License

MIT © [jamilur-r](https://github.com/jamilur-r)
