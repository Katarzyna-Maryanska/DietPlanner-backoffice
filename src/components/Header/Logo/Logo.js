import React from "react";
import classes from "./Logo.module.css"
import { Link } from 'react-router-dom';

const logo = (props) => {
    return (
        <Link to={"/"} style={{ textDecoration: 'none' }}>
                <p className={classes.logoText}><span>Diet</span>Planner</p>
        </Link>

    )
};

export default logo;