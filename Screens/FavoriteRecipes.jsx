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

  const toggleFavorites = (recipeId) =>
    dispatch({ type: toggleFavorite, recipeId: recipeId });

  const favoriteRecipes = useSelector(
    (state) => state.listFavorites.favoriteRecipes
  );

  const renderRecipes = (listItem) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => {
          props.navigation.navigate("Recipe Details", {
            recipeId: listItem.item.recipeId,
          });
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.photo}
            source={{ uri: listItem.item.photo_url }}
          />
          <Text style={styles.title}>{listItem.item.title}</Text>
          <Button
            icon={<MaterialIcons name="favorite-border" size={24} color="white" />}
            onPress={() => toggleFavorites(listItem.item.recipeId)}
          />
        </View>
      </TouchableHighlight>
    );
  };

  const listEmpty = (listItem) => {
    return(
      <View>
        <Text>Nothing found!!</Text>
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
    //height: Dimensions.get('window').height,
    borderColor: "#000000",
    // borderWidth: 0.5,
    // borderRadius: 15,
  },
  photo: {
    resizeMode: "cover",
    width: Dimensions.get("window").width - 50,
    height: 360,
    borderRadius: 15,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },

});

export default Recipes;
