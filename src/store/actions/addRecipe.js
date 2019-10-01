import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        title,
    }
};

export const setPreparation = (preparation) => {
    return {
        type: actionTypes.SET_PREPARATION,
        preparation,
    }
};

export const setPreparationTime = (preparationTime) => {
    return {
        type: actionTypes.SET_PREPARATION_TIME,
        preparationTime,
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients,
    }
};

export const postRecipeRequested = () => {
    return {
        type: actionTypes.POST_RECIPE_REQUESTED,
    }
};

export const postRecipeDone = (data) => {
    return {
        type: actionTypes.POST_RECIPE_DONE,
        payload: data
    }
};

export const postRecipeFailed = (error) => {
    return {
        type: actionTypes.POST_RECIPE_FAILED,
        payload: error
    }
};

export const addRecipe = ({title, preparation, preparationTime, ingredients, categoryId}) => {
    return dispatch => {
        dispatch(postRecipeRequested());

        const url = `http://localhost:8080/api/recipes?XDEBUG_SESSION_START=PHPSTORM`;

        axios.post(url, {
            title,
            preparation,
            preparationTime,
            ingredients,
            categoryId
        })
            .then(response => {
                dispatch(postRecipeDone(response.data));
            })

            .catch(error => {
                dispatch(postRecipeFailed(error))
            })
    }
};