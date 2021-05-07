import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { createUser } from '../helpers/http-provider';


export const SignUpPage = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleOnPressed = async () => {
        const user = await createUser(userName, email, password);
        if(!user){
            console.log("Ha ocurrido un error");
        }
        console.log(user);
        navigation.pop();
        navigation.navigate('UserDetail')
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableHighlight 
                underlayColor="#66ffff"
                onPress = { () => navigation.pop() }>
                <Icon name="verified" color="#51f0a4" />
            </TouchableHighlight>
            <Image source={require('../assets/images/icon.png')} style={styles.iconImage}/>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Login to your account</Text>
            <TextInput
                style= {[styles.inputEmail]}
                placeholder = "Username"
                placeholderTextColor = '#6a6e6b'
                onChangeText={text => setUserName(text)}
                value={userName}
            />
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
                onPress = {handleOnPressed}
                >
                <View style={styles.submit}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Sign In</Text>
                </View>
            </TouchableNativeFeedback>
            <View style={styles.bottomOptions}>
                <Text>¿Already Have an account? </Text>
                <TouchableHighlight 
                    underlayColor="#66ffff"
                    onPress = { () => navigation.pop()}>
                    <Text style={{color: '#0693ef',}}>Sign In here</Text>
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
        borderColor: '#0693ef',
        borderWidth: 1,
        borderRadius: 50,
        color: '#6a6e6b',
        textAlignVertical: 'center',
        paddingLeft: '4%',
        marginBottom: '5%'
    },
    submit: {
        width: '80%',
        marginTop: '5%',
        backgroundColor: '#0693ef',
        height: '6%',
        borderRadius: 50,
        marginBottom: '20%',
        justifyContent: 'center'
    },
    bottomOptions: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '10%'
    }
    /* shadow: {
        shadowColor: "#ffff00",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
    } */
});