import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { toggleFavorite } from "../Store/actions/actionTypes";

const Recipes = (props) => {
  const dispatch = useDispatch();
  const toggleFavorites = (recipeId) =>dispatch({ type: toggleFavorite, recipeId: recipeId });
  const [fav, setFav] = useState('favorite');
  const favoriteRecipes = useSelector(
    (state) => state.listFavorites.favoriteRecipes
  );

  const renderRecipes = (listItem) => {
    return (
      <TouchableHighlight underlayColor="#49b64d" onPress={() => {
          props.navigation.navigate("RecipeDetail", {recipeId: listItem.item.recipeId });
      }}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: listItem.item.photo_url }} />
            <Text style={styles.title}>{listItem.item.title}</Text>
         
            <TouchableOpacity  onPress={() => toggleFavorites(listItem.item.recipeId)}>
              <MaterialIcons name={fav} size={30} color='#2cd18a' />
            </TouchableOpacity>
        </View>
      </TouchableHighlight>
    );
  };

  const listEmpty = (listItem) => {
    return(
      <View style={styles.emptyContainer}>
        <Image source={require("../assets/icons/empty.png")} />
        <Text style={styles.subMessage}>Nothing to Show</Text>
        <Text style={styles.message}>Add Recipes to your Favorites!!!</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={favoriteRecipes} 
      renderItem={renderRecipes}
      ListEmptyComponent={listEmpty} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
    marginTop: 15,
    marginBottom: 15,
    width: Dimensions.get("window").width - 10,
    borderColor: "#000000"  
  },
  photo: {
    resizeMode: "cover",
    width: Dimensions.get("window").width - 50,
    height: 360,
    borderRadius: 15
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5
  },
  emptyContainer: {
    flex: 1,    
    justifyContent: "center",
    alignItems: "center",   
    width: Dimensions.get("window").width - 10,
    borderColor: "#000000"  
  },
  subMessage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray"    
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2cd18a",
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  },
});

export default Recipes;