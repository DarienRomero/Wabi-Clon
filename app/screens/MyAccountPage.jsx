import React from 'react'
import {View, Text, Image, Dimensions, StyleSheet, TouchableNativeFeedback} from 'react-native';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { startSignOut } from '../redux/actions/auth';

const screenWidth = Dimensions.get('window').width;

export const MyAccountPage = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(state => {
        return state.auth;
    });
    const handleOnPressed = () => {
        dispatch(startSignOut());
    }
    return (
        <View style= {styles.container}>
            <Image source={{uri: user.photoUrl}} style={{width: screenWidth * 0.4, height: screenWidth * 0.4, ...styles.profilePhoto}}/>
            <Text style={{fontSize: 22}}>{user.nombres}</Text>            
            <Text style={{fontSize: 16, marginBottom: 20}}>{user.email}</Text>
            <TouchableNativeFeedback
                onPress = { handleOnPressed }
                >
                <View style={styles.submit}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Sign out</Text>
                </View>
            </TouchableNativeFeedback>            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    profilePhoto: {
        borderRadius: 50,
        marginBottom: 20
    },
    submit: {
        width: '60%',
        marginTop: '5%',
        backgroundColor: 'red',
        height: '6%',
        borderRadius: 50,
        marginBottom: '20%',
        justifyContent: 'center'
    },
});
