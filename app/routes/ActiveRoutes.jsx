import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SignInPage } from '../screens/SignInPage';
import { OnboardingPage } from '../screens/OnboardingPage';
import { MainDrawer } from '../routes/drawer';
import { initialStack } from '../config/navigation';

const Stack = createStackNavigator();

export const ActiveRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName="Pagina2Screen"
                screenOptions={{
                    headerShown: false,
                    cardStyle:{
                        backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name = {initialStack.onboarding} component={OnboardingPage}/>
                <Stack.Screen name = {initialStack.sign_in} component={SignInPage}/>
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
                {/* <Stack.Screen name = "SignUpPage" component={SignUpPage}/>
                <Stack.Screen name = "UserDetail" component={UserDetail}/> */}
            </Stack.Navigator>    
        </NavigationContainer>
        
    );
}