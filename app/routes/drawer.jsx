import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainPage } from '../screens/MainPage';
import {CustomDrawerContent} from '../components/drawer/CustomDrawerContent';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get('window').width;

export const MainDrawer = (props) => {
    //   console.log('MainDrawer :>> ', props);
    return (
        <Drawer.Navigator
            drawerPosition={"left"}
            overlayColor="rgba(0,0,0,0.6)"
            drawerStyle={{
                backgroundColor: '#0B52CC',
                width: screenWidth * 0.6,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="MainPage" component={MainPage} />
        </Drawer.Navigator>
    );
}
