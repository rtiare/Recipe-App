import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {MyBottomTabNavigator} from './Navigation/MainNavigator'

import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'

import recipesReducer from './Store/reducers/recipeReducer';
import categoriesReducer from './Store/reducers/categoriesReducer';
import favoriteReducer from './Store/reducers/favoriteReducer';

const rootReducer = combineReducers({
  listCategories: categoriesReducer,
  listRecipes : recipesReducer,
  listFavorites: favoriteReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
            <MyBottomTabNavigator/>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
