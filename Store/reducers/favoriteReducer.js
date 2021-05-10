import { categoriesList, recipesList, ingredientsList } from "../../mockData";
import { toggleFavorite } from "../actions/actionTypes";

const initialState = {
  recipes: recipesList,
  favoriteRecipes: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFavorite:
      console.warn(action);

      const existingIndex = state.favoriteRecipes.findIndex(
        (recipe) => recipe.recipeId === action.recipeId
      );

      if (existingIndex >= 0) {
        // Is inside of Favorites
        console.warn("Removed from favorite");
        // Remove recipe from favorites
        const updatedFavoritesRecipes = [...state.favoriteRecipes];
        updatedFavoritesRecipes.splice(existingIndex, 1);

        return { ...state, favoriteRecipes: updatedFavoritesRecipes };
      } else {
        // Is not inside Favorites
        console.warn("Added to favorite");
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
