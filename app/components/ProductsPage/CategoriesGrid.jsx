import React from 'react'
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const CategoriesGrid = () => {
    return (
        <View style= {styles.categoriesContainer}>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/alcohol.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>ALCOHOL</Text>
        </View>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/chocolate.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>ALFAJORES Y CHOCOLATES</Text>
        </View>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/almacen.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>ALMACÉN</Text>
        </View>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/bebidas.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>BEBIDAS</Text>
        </View>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/combos.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>COMBOS</Text>
        </View>
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/infantil.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>CUIDADO INFANTIL</Text>
        </View> 
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/personal.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>CUIDADO PERSONAL</Text>
        </View> 
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/galletas.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>GALLETAS</Text>
        </View> 
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/golosinas.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>GOLOSINAS</Text>
        </View>    
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/higiene.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>HIGIENE Y BELLEZA</Text>
        </View>  
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/lacteos.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>LÁCTEOS</Text>
        </View> 
        <View style= {{width: screenWidth * 0.25, height: screenWidth * 0.4, ...styles.categoryContainer}}>
            <Image 
                source = {require('../../assets/images/categories/limpieza.png')}
                resizeMode = 'contain'>
            </Image>
            <Text style={{textAlign: 'center'}}>LIMPIEZA</Text>
        </View>     
    </View> 
    )
}
const styles = StyleSheet.create({
    categoriesContainer: {
        marginHorizontal: '5%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryContainer: {
        alignItems: 'center'
    }
});