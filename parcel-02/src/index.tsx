import "./mystyles.scss";
const logo = require("./content/logo.png");
/* const logo = require("./content/logo_1.png"); */
import React from "react";
import ReactDOM from "react-dom";
import  { App } from "./app";

const bundler = "Parcel";

console.log(`I'm in ${bundler}`);

const img = document.createElement("img");
img.src = logo;

document.getElementById("imgContainer").appendChild(img);


ReactDOM.render(
    <App />
, document.getElementById("root"));