import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ("input"):
            inputElement = <input className={classes.inputElement} {...props}/>;
            break;
        case ("textarea"):
            inputElement = <textarea className={classes.inputElement} {...props}/>;
            break;
        case ("search"):
            inputElement = <input type="search"
                                  className={classes.inputElement}
                                  aria-label="Search through site content" {...props}/>;
            break;
        case ("file"):
            inputElement = <input type="file"
                                  className={classes.inputElement}
                                  accept="image/png, image/jpeg" {...props}/>;
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props}/>;
    }

    return(
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    )
};


export default Input;