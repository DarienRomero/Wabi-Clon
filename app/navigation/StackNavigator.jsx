import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { SignInPage } from '../screens/SignInPage';
import { OnboardingPage } from '../screens/OnboardingPage';
import { MainPage } from '../screens/MainPage';
import { MainDrawer } from '../routes/drawer';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="Pagina2Screen"
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name = "OnboardingPage" component={OnboardingPage}/>
            <Stack.Screen name = "SignInPage" component={SignInPage}/>
            <Stack.Screen name= "MainPage"
                options={({ navigation, route }) => {
                    // console.log('route123 :>> ', route);
                    // navigation.setParams({profile:props.profile})
                    return {
                        headerShown: false
                    }
                }}>
                {props => <MainDrawer  {...props} />}
            </Stack.Screen>
            {/* <Stack.Screen name = "SignUpPage" component={SignUpPage}/>
            <Stack.Screen name = "UserDetail" component={UserDetail}/> */}
        </Stack.Navigator>
    );
}