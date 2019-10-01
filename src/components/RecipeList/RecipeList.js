import React from "react";
import classes from "./RecipeList.module.css";

import Input from "../../UI/Input/Input";
import {HeadingH3} from "../../Typography/Heading"


const RecipeList = () => {
    return (
        <section className={classes.recipeList}>
            <div className={classes.container}>
                <Input placeholder={"Search for recipe"} inputtype="search"/>
                <HeadingH3>RECIPE LIST</HeadingH3>
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
            </div>
        </section>
    )
};



export default RecipeList;