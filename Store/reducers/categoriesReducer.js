import { categoriesList } from '../../mockData'

const initialState = {
    categories: categoriesList,
};

const categoriesReducer = (state = initialState, action) => {
    return state;
};

export default categoriesReducer;