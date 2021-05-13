import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { SignInPage } from '../screens/SignInPage';
import { OnboardingPage } from '../screens/OnboardingPage';
import { initialStack } from '../config/navigation';
import { SelectAddressPage } from '../screens/SelectAddressPage';

const Stack = createStackNavigator();

export const NotAuthenticatedRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName= {initialStack.onboarding}
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name = {initialStack.onboarding} component={OnboardingPage}/>
            <Stack.Screen name = {initialStack.sign_in} component={SignInPage}/>
            <Stack.Screen name = {initialStack.address} component={SelectAddressPage}/>
        </Stack.Navigator>
    )
}
