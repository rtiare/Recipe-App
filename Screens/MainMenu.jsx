import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, FlatList, Image, TouchableHighlight, Dimensions } from 'react-native';
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';


const Categories = props => {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.listCategories.categories);

    const renderCategories = listItem => {
        return (
            <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => {
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
        //height: Dimensions.get('window').height,
        borderColor: '#000000',
        // borderWidth: 0.5,
        // borderRadius: 15,
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
});


export default Categories;