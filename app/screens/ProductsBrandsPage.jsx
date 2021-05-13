import React from 'react';
import {View, Text} from 'react-native';
import {ProductsGrid} from '../components/ProductsPage/ProductsGrid';

export const ProductsBrandsPage = (props) => {
    console.log(props.route.params);
    return (
        <View>
            <ProductsGrid query={props.route.params}/>
        </View>
    )
}
