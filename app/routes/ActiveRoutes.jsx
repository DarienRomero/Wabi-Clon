import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SignInPage } from '../screens/SignInPage';
import { OnboardingPage } from '../screens/OnboardingPage';
import { MainDrawer } from '../routes/drawer';
import { initialStack } from '../config/navigation';
import { useSelector } from 'react-redux';
import {NotAuthenticatedRoutes} from './NotAuthenticatedRoutes';
import {AuthenticatedRoutes} from './AuthenticatedRoutes';
import NavigationService from '../util/navigation';

const Stack = createStackNavigator();

export const ActiveRoutes = () => {
    const logged = useSelector(state => {
        return state.auth.isLogged;
    });
    console.log("Cambio de pantalla");
    console.log(logged);
    return (
        <NavigationContainer ref={navigatorRef => {
            if (navigatorRef)
                NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
            {logged ?
                <AuthenticatedRoutes /> :
                <NotAuthenticatedRoutes />
            }  
        </NavigationContainer>
        
    );
}