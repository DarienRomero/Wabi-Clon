import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { SignInPage } from '../screens/SignInPage';
import { OnboardingPage } from '../screens/OnboardingPage';
import { MainDrawer } from '../routes/drawer';
import { initialStack } from '../config/navigation';

const Stack = createStackNavigator();

export const AuthenticatedRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName= {initialStack.main}
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name= {initialStack.main}
                options={({ navigation, route }) => {
                    // console.log('route123 :>> ', route);
                    // navigation.setParams({profile:props.profile})
                    return {
                        headerShown: false
                    }
                }}>
                {props => <MainDrawer  {...props} />}
            </Stack.Screen>
            {/* <Stack.Screen name = {initialStack.onboarding} component={OnboardingPage}/>
            <Stack.Screen name = {initialStack.sign_in} component={SignInPage}/> */}
        </Stack.Navigator>
    )
}
