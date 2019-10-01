import React from "react";
import classes from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import Logo from "./Logo/Logo";


class Header extends React.Component {

    render() {
        return (
            <header className={classes.header}>
                <Logo/>
                <ul className={classes.nav}>
                    <NavLink
                        className={classes.navLink}
                        activeClassName={classes.active}
                        to={"/all"}>
                        <li className={classes.navItem}>All recipes</li>
                    </NavLink>
                    <NavLink
                        className={classes.navLink}
                        activeClassName={classes.active}
                        to={"/add"}>
                        <li className={classes.navItem}>Add recipe</li>
                    </NavLink>
                </ul>
            </header>
        )
    }
};

export default Header;