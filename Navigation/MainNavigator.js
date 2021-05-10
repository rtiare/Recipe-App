import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import MainMenu from "../Screens/MainMenu";
import Recipes from "../Screens/Recipes";
import RecipeDetail from "../Screens/RecipeDetails";
import FavoriteRecipes from "../Screens/FavoriteRecipes";

import { ColorPropType } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Favorite = createStackNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main Menu" component={MainMenu} />
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
  );
}

function FavoriteScreenStack() {
  return (
    <Favorite.Navigator>
      <Favorite.Screen name="Favorite Recipes" component={FavoriteRecipes} />
      <Favorite.Screen name="Recipe Details" component={RecipeDetail} />
    </Favorite.Navigator>
  );
}

function MyBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main Menu"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreenStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { MyBottomTabNavigator };
