import color from 'color';
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableHighlight, Dimensions } from 'react-native';
import { useSelector} from 'react-redux';

const Recipes = props => {

    //get route name to navigate to recipe screen
    const search = props.route.params.search; 

    //search store state and filter foe the receipe
    const recipes = useSelector(state => state.listRecipes.recipes).filter((recipe) => recipe.title.toUpperCase().includes(search.toUpperCase()));
    
    const renderRecipes = listItem => {
        return (
            <TouchableHighlight underlayColor='#49b64d' onPress={() => {
                props.navigation.navigate('RecipeDetail', { recipeId: listItem.item.recipeId });
            }}>
                <View style={styles.container}>
                    <Image style={styles.photo} source={{ uri: listItem.item.photo_url }} />
                    <Text style={styles.title}>{listItem.item.title}</Text>

                </View>
            </TouchableHighlight>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.searchContainerText}>Search for: "{search}"</Text>
            <FlatList
                data={recipes}
                keyExtractor={(recipe) => recipe.recipeId.toString()}
                key={(recipe) => recipe.recipeId}
                renderItem={renderRecipes}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
        marginTop: 15,
        marginBottom: 15,
        width : Dimensions.get('window').width - 10,
        borderColor: '#000000'
    },
    photo: {
        resizeMode: 'cover',
        width: Dimensions.get('window').width - 50,
        height: 360,
        borderRadius: 15,
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 4,
        marginRight: 5,
        marginLeft: 5,
    },
    searchContainerText: {
        fontSize: 17,
        margin: 10,
        textAlign: 'center', 
        fontWeight: 'bold',
        color: '#2cd18a'
    }
});

export default Recipes;