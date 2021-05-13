import React from 'react'
import {SafeAreaView, Text, ScrollView, Image, View, StyleSheet, Dimensions} from 'react-native';
import {CategoriesGrid} from '../components/ProductsPage/CategoriesGrid';
import {BrandsScroll} from '../components/ProductsPage/BrandsScroll';
import { useSelector } from 'react-redux';
import {productsStack} from '../config/navigation';

const screenWidth = Dimensions.get('window').width;

export const ProductsPage = ({navigation}) => {
    const address = useSelector(state => {
        return state.address;
    });
    console.log(address);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style= {styles.header}>
                    <Text style= {styles.headerText}>{address.name}</Text>
                </View>
                <BrandsScroll 
                    onSelection = {(brandSelected) =>{
                        navigation.push(productsStack.brands, brandSelected);
                    }}
                />
                <CategoriesGrid />            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
});
