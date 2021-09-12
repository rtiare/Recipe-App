import { categoriesList, recipesList, ingredientsList } from "../../mockData";
import { toggleFavorite } from "../actions/actionTypes";

const initialState = {
  recipes: recipesList,
  favoriteRecipes: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFavorite:

      const existingIndex = state.favoriteRecipes.findIndex(
        (recipe) => recipe.recipeId === action.recipeId
      );

      if (existingIndex >= 0) {
        // Is inside of Favorites
        // Remove recipe from favorites
        const updatedFavoritesRecipes = [...state.favoriteRecipes];
        updatedFavoritesRecipes.splice(existingIndex, 1);

        return { ...state, favoriteRecipes: updatedFavoritesRecipes };
      } else {
        // Is not inside Favorites
        // Add recipe TO Fav

        const recipe = state.recipes.find(
          (recipe) => recipe.recipeId === action.recipeId
        );

        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.concat(recipe),
        };
      }

    default:
      return state;
  }
};

export default favoriteReducer;
