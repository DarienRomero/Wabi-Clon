import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {productsStack} from '../config/navigation';
import { ProductsPage } from '../screens/ProductsPage';
import { ProductsCategoriesPage } from '../screens/ProductsCategoriesPage';
import { ProductsBrandsPage } from '../screens/ProductsBrandsPage';


const Stack = createStackNavigator();

export const ProductsStack = () => {

    return (
        <Stack.Navigator
            initialRouteName={productsStack.main}
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen
                name={productsStack.main}
                component={ProductsPage}
            />
            <Stack.Screen
                name={productsStack.categories}
                component={ProductsCategoriesPage}
            />
            <Stack.Screen
                name={productsStack.brands}
                component={ProductsBrandsPage}
            />
        </Stack.Navigator>
    );
}