import React from 'react'
import {Text, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {ProductsPage} from './ProductsPage';
import {ShoppingCartPage} from './ShoppingCartPage';
import {OrdersPage} from './OrdersPage';
import {MyAccountPage} from './MyAccountPage';
import i18n from '../config/i18n';

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
                showLabel: true,
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
            <Tab.Screen name={"ProductsPage"} options={({ navigation, route }) => {
                return {
                    // tabBarVisible: isTabBarVisible(!_.isNil(route) ? route : null),
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={{
                                color: "#0B52CC", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", fontFamily: "roboto-medium", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('products_page.label')}
                            </Text> :
                            <Text style={{
                                color: "#A8B2BE", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('products_page.label')}
                            </Text>
                    ),
                    /* tabBarIcon: (props) => {
                        return (props.focused ?
                            <Image resizeMode={"contain"} style={{ width: 19, height: 19, }} source={require("@images/common/ico_campaign_selected.png")} /> :
                            <Image style={{ width: 19, height: 19, }} source={require("@images/common/ico_campaign.png")} />
                        )
                    } */
                }
            }} component={ProductsPage} />
            <Tab.Screen name={"ShoppingCartPage"} options={({ navigation, route }) => {
                return {
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={{
                                color: "#0B52CC", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", fontFamily: "roboto-medium", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('shopping_cart_page.label')}
                            </Text> :
                            <Text style={{
                                color: "#A8B2BE", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('shopping_cart_page.label')}
                            </Text>
                    ),
                }
            }} component={ShoppingCartPage} />
            <Tab.Screen name={"OrdersPage"} options={({ navigation, route }) => {
                return {
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={{
                                color: "#0B52CC", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", fontFamily: "roboto-medium", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('orders_page.label')}
                            </Text> :
                            <Text style={{
                                color: "#A8B2BE", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('orders_page.label')}
                            </Text>
                    ),
                }
            }} component={OrdersPage} />
            <Tab.Screen name={"MyAccountPage"} options={({ navigation, route }) => {
                return {
                    tabBarLabel: ({ focused }) => (
                        focused ?
                            <Text style={{
                                color: "#0B52CC", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", fontFamily: "roboto-medium", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('my_account_page.label')}
                            </Text> :
                            <Text style={{
                                color: "#A8B2BE", fontSize: 12, lineHeight: 14, marginLeft: (Platform.isPad) ? 20 : 0,
                                textAlign: "center", marginBottom: (Platform.isPad) ? 0 : 5
                            }}>
                                {i18n.t('my_account_page.label')}
                            </Text>
                    ),
                }
            }} component={MyAccountPage} />
        </Tab.Navigator>
    )
}
