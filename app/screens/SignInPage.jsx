import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, View, Dimensions } from 'react-native'
import {useDispatch} from 'react-redux';
import { startLoginEmailPassword } from '../redux/actions/auth';

const screenWidth = Dimensions.get('window').width;

export const SignInPage = ({navigation}) => {
    const dispatch = useDispatch(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnPressed = async () => {
        dispatch(startLoginEmailPassword(email, password));
        /* const user = await loginUser(email, password);
        console.log(user); */
        // if(!user) return;
        navigation.replace('MainPage')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/app_icon.png')} style={{width: screenWidth * 0.4, height: screenWidth * 0.4,borderRadius: 20, marginTop: 20}}/>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Login to your account</Text>
            <TextInput
                keyboardType="email-address"
                style= {[styles.inputEmail]}
                placeholder = "Email"
                placeholderTextColor = '#6a6e6b'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                style= {[styles.inputEmail]}
                placeholder = "Password"
                placeholderTextColor = '#6a6e6b'
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TouchableNativeFeedback
                onPress = { handleOnPressed }
                >
                <View style={styles.submit}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Sign In</Text>
                </View>
            </TouchableNativeFeedback>
            <View style={styles.bottomOptions}>
                <Text>¿Don't have an account? </Text>
                <TouchableHighlight 
                    underlayColor="#66ffff"
                    onPress = { () => navigation.navigate('SignUpPage') }>
                    <Text style={{color: 'red',}}>Sign Up here</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconImage: {
        width: '20%',
        height: '20%',
        marginTop: '10%'
    },
    title: {
        fontSize: 26,
        color: '#737373'
    },
    subtitle: {
        fontSize: 16,
        color: '#8c8c8c',
        marginBottom: '10%'
    },
    inputEmail:{
        width: '80%',
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        color: '#6b6b6b',
        textAlignVertical: 'center',
        paddingLeft: '4%',
        marginBottom: '5%'
    },
    submit: {
        width: '80%',
        marginTop: '5%',
        backgroundColor: 'red',
        height: '6%',
        borderRadius: 50,
        marginBottom: '20%',
        justifyContent: 'center'
    },
    bottomOptions: {
        flexDirection: 'row',
    }
});