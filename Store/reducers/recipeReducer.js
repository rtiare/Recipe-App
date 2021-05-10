import { recipesList } from '../../mockData';

const initialState = {
    recipes: recipesList,
};

const recipesReducer = (state = initialState, action) => {
    return state;
};

export default recipesReducer;