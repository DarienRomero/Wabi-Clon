import React from 'react';
import {View, Text, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import i18n from '../config/i18n';

export const OnboardingPage = ({navigation}) => {

    const handleCurrentAddress = () =>{
        navigation.replace('SignInPage')
    }
    const handleNewAddress = () => {
        navigation.push('SelectAddressPage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/images/app_icon.png')} style={styles.headerAppImage}/>
                <Text style = {styles.headerTitle}>!Bienvenido a wabi!</Text>
                <Image source={require('../assets/images/onboarding_image.png')} style={styles.headerImage}/>
            </View>
            <View style= {styles.footer}>
                <TouchableNativeFeedback
                    onPress = { handleNewAddress }>
                    <View style= {styles.newAddressButton}>
                        <Text style={{textAlign: 'center', color: 'white'}}>{i18n.t('sign_in.new_address')}</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{height: 10}}></View>    
                <TouchableNativeFeedback
                    onPress = { handleCurrentAddress }>
                    <View style= {styles.currentAddressButton}>
                        <Text style={{textAlign: 'center', color: 'red', fontWeight: '600'}}>{i18n.t('sign_in.current_address')}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    header: {
        paddingVertical: '10%',
        backgroundColor: 'red',
        height: '80%',
        width: '100%',
        alignItems: 'center'
    },
    headerTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    headerAppImage: {
        width: '30%',
        height: '30%'
    },
    headerImage: {
        paddingHorizontal: '10%',
        width: '80%',
        height: '70%'
    },
    footer: {
        backgroundColor: 'white',
        height: '22%',
        width: '100%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0
    },
    newAddressButton: {
        width: '80%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 50
    },
    currentAddressButton: {
        width: '80%',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 50
    },
})
