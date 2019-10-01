import React from "react";
import classes from "./Heading.module.css";

export const HeadingH1 = (props) => {
    return (
        <h1 className={classes.headingH1}>{props.children}</h1>
    )
};

export const HeadingH2 = (props) => {
    return (
        <h2 className={classes.headingH2}>{props.children}</h2>
    )
};

export const HeadingH3 = (props) => {
    return (
        <h3 className={classes.headingH3}>{props.children}</h3>
    )
};

