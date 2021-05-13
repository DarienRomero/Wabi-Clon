import React from 'react'
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {ShoppingCartPage} from './ShoppingCartPage';
import {OrdersPage} from './OrdersPage';
import {MyAccountPage} from './MyAccountPage';
import { authenticatedHomeStack } from '../config/navigation';
import { ProductsStack } from '../routes/ProductsStack';


const Tab = createBottomTabNavigator();

/* const isTabBarVisible = (route) => {

    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = [authenticatedProfileStack.favorites, authenticatedSearchStack.results];
    if (hideOnScreens.indexOf(routeName) > -1)
        return false;
    
    return true;
} */

export const MainPage = (props) => {
    return (
        <Tab.Navigator
            initialRouteName={"ProductsPage"}
            screenOptions={{ gestureEnabled: false }}
            tabBarOptions={{
                activeTintColor: '#e91e63',
                showLabel: false,
                activeBackgroundColor: "#fff",
                inactiveBackgroundColor: "#fff",
                // color:"#F5F5F5",
                /* style: {
                    // marginTop: 10,
                    height: 50 + props.insetsBottom,
                    borderTopColor: "#D7E0EF"
                } */
            }}
        >
            <Tab.Screen name="ProductsStack" options={({ navigation, route }) => {
                return {
                    tabBarIcon: (props) => {
                        return (props.focused ?
                            <Image resizeMode={"contain"} style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/online-store-active.png")} /> :
                            <Image style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/online-store.png")} />
                        )
                    }
                }
            }} component={ProductsStack} />
            <Tab.Screen name={authenticatedHomeStack.shopping} options={({ navigation, route }) => {
                return {
                    tabBarIcon: (props) => {
                        return (props.focused ?
                            <Image resizeMode={"contain"} style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/shopping-cart-active.png")} /> :
                            <Image style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/shopping-cart.png")} />
                        )
                    }
                }
            }} component={ShoppingCartPage} />
            <Tab.Screen name={authenticatedHomeStack.orders} options={({ navigation, route }) => {
                return {
                    tabBarIcon: (props) => {
                        return (props.focused ?
                            <Image resizeMode={"contain"} style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/shopping-bag-active.png")} /> :
                            <Image style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/shopping-bag.png")} />
                        )
                    }
                }
            }} component={OrdersPage} />
            <Tab.Screen name={authenticatedHomeStack.profile} options={({ navigation, route }) => {
                return {
                    tabBarIcon: (props) => {
                        return (props.focused ?
                            <Image resizeMode={"contain"} style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/user-active.png")} /> :
                            <Image style={{ width: 20, height: 20, }} source={require("../assets/images/bottom_navigation/user.png")} />
                        )
                    }
                }
            }} component={MyAccountPage} />
        </Tab.Navigator>
    )
}
