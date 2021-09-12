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
      <Stack.Screen name="Home" component={MainMenu}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            letterSpacing: 1,
          },
          
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="Recipes" component={Recipes} 
        options={{
          title: 'Recipe List',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {            
            fontSize: 23
          }         
        }}
      />
      <Stack.Screen name="RecipesSearch" component={RecipesSearch} 
        options={{
          title: 'Search Recipe',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {            
            fontSize: 23
          }         
        }}
      />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} 
        options={{
          title: 'Recipe Detail',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {            
            fontSize: 23
          }         
        }}
      />
    </Stack.Navigator>
  );
}

function FavoriteScreenStack() {
  return (
    <Favorite.Navigator>
      <Favorite.Screen name="FavoriteRecipes" component={FavoriteRecipes} 
        options={ ({ navigation }) => ({
          title: 'Favorite Recipes',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {            
            fontSize: 23
          }, 
         headerRight: () => (
          <TouchableOpacity onPress={() => { navigation.navigate('Home');}}>
            <MaterialIcons name='search' size={30} color='black' />
          </TouchableOpacity>            
          )
        })}
        
      />
      <Favorite.Screen name="RecipeDetail" component={RecipeDetail} 
        options={{
          title: 'Recipe Detail',
          headerStyle: {
            backgroundColor: '#466475',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {            
            fontSize: 23
          }         
        }}
      />
    </Favorite.Navigator>
  );
}

function MyBottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#00a3ff",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    > 
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}        
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" size={25} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreenStack}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={25} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { MyBottomTabNavigator };