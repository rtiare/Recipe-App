import React, {useEffect, useState} from "react";
import { StyleSheet, ScrollView, Text, View, Image, Dimensions, TouchableHighlight, FlatList,TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../Store/actions/actionTypes";

const { width: viewportWidth } = Dimensions.get("window");

const RecipeDetail = (props) => {
  const dispatch = useDispatch();
  // console.log(props.route.params.recipeId);
  const recipeId = props.route.params.recipeId;
  //console.log(recipeId);
  const recipes = useSelector((state) => state.listRecipes.recipes);
  const categories = useSelector((state) => state.listCategories.categories);

  const [activeSlide, setActiveSlide] = useState(0);

  // fin object with mathcing recipe id in array
  const recipe = recipes.find(recipe => recipe.recipeId === recipeId); 

  const category = categories[recipe.categoryId];
  
  //use redux hook(setter/getter) to set/update favorites
  const favoriteRecipes = useSelector((state) => state.listFavorites.favoriteRecipes); 
  const favorite = favoriteRecipes.find(recipe => recipe.recipeId === recipeId);   
  const [fav, setFav] = useState('favorite-border');

  //toggle favorite
  const toggleFavorites = (recipeId) =>
    dispatch({ type: toggleFavorite, recipeId: recipeId });

  useEffect(() => {
    if(favorite !== undefined){
      setFav('favorite');
    }
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const renderIngredients = ({ item }) => (
    <View style={styles.ingredients}>
      <Text> {"\u27A4"} {"\t" + item.key}</Text>
    </View>
  );

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.carouselContainer}>
        <View>
          <Carousel
            layout={"default"}
            
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
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{recipe.title}</Text>
        <Text style={styles.infoCategoryName}>{category.name}</Text>
      </View>       
      <View style={styles.infoContainer}>
        <Image style={styles.infoPhoto} source={require("../assets/icons/time.png")} />
        <Text style={styles.infoRecipe}> Cook Time : {recipe.time} minutes{" "} </Text>
      </View>
      <View style={styles.infoFavoriteContainer}>    
      <TouchableOpacity  onPress={() => { toggleFavorites(recipe.recipeId); setFav('favorite'); }}>
         <MaterialIcons name={fav} size={30} color='#2cd18a' />
      </TouchableOpacity>
      </View> 
      <View style={styles.infoDescriptionRecipe}>
        <View style={styles.infoIngredientsRecipe}>
          <Text style={styles.subTittle}>Ingredients:{"\n"}</Text>
          <FlatList
            style={styles.infoDescriptionRecipe}
            //nestedScrollEnabled={true}
            scrollEnabled= {false}
            data={recipe.ingredients}
            renderItem={renderIngredients}
          />
        </View>
        <View style={styles.infoDirectionsRecipe}>
          <Text style={styles.subTittle}>Directions:{"\n"}</Text>
          <Text style={styles.infoStepsRecipe}>{recipe.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  carouselContainer: {
    minHeight: 250,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 250,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 250
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  infoFavoriteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  infoPhoto: {
    height: 20,
    width: 20    
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5
  },
  subTittle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#2cd18a"    
  },
  infoDescriptionRecipe: {
    flex: 1,
    textAlign: "left",
    fontSize: 15,
    marginTop: 1,
    margin: 10,
    marginBottom: 20
  },
  infoIngredientsRecipe: {
    flex: 1,
    textAlign: "left",
    fontSize: 16  
  },
  infoDirectionsRecipe: {
    flex: 1,
    textAlign: "left",
    fontSize: 16,
    marginTop: 15
  },
  infoRecipeName: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  infoCategoryName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    textAlign: "center"   
  },
  infoStepsRecipe: {
    flex: 1,
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 1,
    margin: 20,
    marginBottom: 10    
  }  
});

export default RecipeDetail;
