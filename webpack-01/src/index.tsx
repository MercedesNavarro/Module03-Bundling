import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

console.log(`Api base: ${process.env.API_BASE}`);

ReactDOM.render(
    <div>
        <App />
    </div>
, document.getElementById("root"));