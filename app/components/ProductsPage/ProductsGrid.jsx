import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getProductsByBrand} from '../../helpers/http-provider';

export const ProductsGrid = ({query}) => {
    const [loading, setLoading] = useState(true);
    const [productsList, setProductsList] = useState([]);
    
    useEffect(() => {
        getProductsList(query);
    }, []);
    
    const getProductsList = async (query) => {
        const products = getProductsByBrand(query);
        console.log(products);
        setProductsList(products);
        setLoading(false);
    }
    return (
        <View style= {styles.container}>
            {
                loading ? <Text>
                    Cargando
                </Text> : productsList.map((productItem) => {
                    <Text key={productItem.nombre}>{productItem.nombre}</Text>
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    productContainer: {
        borderColor: 'grey',
        borderWidth: 1
    }
});