import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";

import {toggleFavorite} from '../Store/actions/actionTypes';

const { width: viewportWidth } = Dimensions.get("window");

const RecipeDetail = (props) => {
  const dispatch = useDispatch();
  // console.log(props.route.params.recipeId);
  const recipeId = props.route.params.recipeId;
  //console.log(recipeId);
  const recipes = useSelector((state) => state.listRecipes.recipes);
  const categories = useSelector((state) => state.listCategories.categories);

  const [activeSlide, setActiveSlide] = useState(0);

  // array
  recipes.find((recipe) => recipe.id === recipeId);
  // object
  const recipe = recipes[recipeId];

  const category = categories[recipe.categoryId];
  console.log("--  " + category.name);

  //toggle favorite
  const toggleFavorites = (recipeId) =>
    dispatch({ type: toggleFavorite, recipeId: recipeId });

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            layout={"tinder"}
            layoutCardOffset={`9`}
            ref={(c) => {
              _carousel = c;
            }}
            data={recipe.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={recipe.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      </View>
      <View>
        <Text style={styles.infoRecipeName}>{recipe.title}</Text>
        <Button
          icon={<MaterialIcons name="favorite-border" size={24} color="white"/>}
          onPress={() => toggleFavorites(recipe.recipeId)}
        />
        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../assets/icons/time.png")}
          />
          <Text style={styles.infoRecipe}>
            Cook Time: {recipe.time} minutes{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.subTittle}>Ingredients:{"\n"}</Text>
          <FlatList
            style={styles.infoDescriptionRecipe}
            nestedScrollEnabled={true}
            data={recipe.ingredients}
            renderItem={({ item }) => (
              <Text>
                {"\u27A4"} {"\t" + item.key}
              </Text>
            )}
          />
          <Text style={styles.subTittle}>Directions:{"\n"}</Text>
          <Text style={styles.infoDescriptionRecipe}>{recipe.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    minHeight: 250,
  },

  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 250,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 250,
  },

  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: 200,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },

  infoRecipeContainer: {
    flex: 1,
    margin: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  infoContainer: {
    //backgroundColor: 'red',
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    //justifyContent: 'flex-start',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },

  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },

  subTittle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2cd18a",
    alignSelf: "center",
  },

  infoDescriptionRecipe: {
    //backgroundColor: 'red',
    textAlign: "left",
    fontSize: 16,
    marginTop: 10,
    margin: 15,
  },

  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },

  infoRecipeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 50,
    marginBottom: 50,
  },

  infoRecipeName: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default RecipeDetail;
