import React from 'react'
import {SafeAreaView, Text, ScrollView, Image, View, StyleSheet, Dimensions} from 'react-native';
import {CategoriesGrid} from '../components/ProductsPage/CategoriesGrid';
import {BrandsScroll} from '../components/ProductsPage/BrandsScroll';

const screenWidth = Dimensions.get('window').width;

export const ProductsPage = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style= {styles.header}>
                    <Text style= {styles.headerText}>Calle Putumayo 217</Text>
                </View>
                <BrandsScroll />
                <CategoriesGrid />            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'red',
        height: '20%',
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
