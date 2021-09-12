import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableHighlight, Dimensions } from 'react-native';
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';


const Categories = props => {

    const categories = useSelector(state => state.listCategories.categories);
    const [search, setSearch] = useState('');

    const renderCategories = listItem => {
        return (
            <TouchableHighlight underlayColor='#49b64d' onPress={() => {
                props.navigation.navigate('Recipes', { id: listItem.item.id });
            }}>
                <View style={styles.container}>
                    <Image style={styles.photo} source={{ uri: listItem.item.photo_url }} />
                    <Text style={styles.title}>{listItem.item.name}</Text>

                </View>
            </TouchableHighlight>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TextInput style={styles.searchBar} placeholder='Search...' value={search} onChangeText={(text) => setSearch(text)}/>
                <TouchableOpacity onPress={() => props.navigation.navigate('RecipesSearch', {search: search})}>
                    <Image style={styles.searchIcon} source={require('../assets/icons/search.png')}/>
                </TouchableOpacity>
            </View>            
            <FlatList
                data={categories}
                keyExtractor={(category) => category.id.toString()}
                key={(category) => category.id}
                renderItem={renderCategories}
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
        borderColor: '#000000',
    },

    photo: {
        resizeMode: 'cover',
        width: Dimensions.get('window').width - 50,
        height: 360,
        borderRadius: 15,
    },

    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    searchBar:{
        width: Dimensions.get('window').width - 100,
        textAlign: 'center',
        color: '#72898c',
        borderWidth: 2,
        borderColor: "#000000",
        marginBottom: 10,
        borderColor: '#9fc0c4',
        borderRadius: 13 ,
        fontSize: 16,
        backgroundColor : "#FFFFFF"
 
    },

    searchIcon: {
        height: 30,
        width: 30,
    },
});



export default Categories;