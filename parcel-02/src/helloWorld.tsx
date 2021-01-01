import React from "react";
const classes = require("./mystyles.scss");

export const HelloWorld: React.FC = () => {
    return (<h2 className={classes.special}>Hello Parcel from React</h2>);
};