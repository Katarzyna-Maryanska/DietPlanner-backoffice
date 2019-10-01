import * as actionTypes from "../actions/actionTypes";

const initialState = {
    title: "",
    preparation: "",
    preparationTime: "",
    ingredients: [],
    error: false,
    isLoading: false
};

const addRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case actionTypes.SET_PREPARATION:
            return {
                ...state,
                preparation: action.preparation
            };
        case actionTypes.SET_PREPARATION_TIME:
            return {
                ...state,
                preparationTime: action.preparationTime
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            };
        case actionTypes.POST_RECIPE_REQUESTED:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case actionTypes.POST_RECIPE_DONE:
            return {
                ...state,
                isLoading: false,
                recipe: action.payload,
                error: false
            };
        case actionTypes.POST_RECIPE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default addRecipeReducer;