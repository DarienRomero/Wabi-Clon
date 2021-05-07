import React from 'react'
import { Linking, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

export const CallButton = ({fullPhoneNumber}) => {
    return (
        <View style={{marginBottom: 20}}>
            <TouchableNativeFeedback
                onPress = {() => {
                    Linking.openURL(`tel:${fullPhoneNumber}`)
                }}
            >
                <View style= {styles.button}>
                    <Text style= {styles.buttonText}>Hire me</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: '60%',
        marginHorizontal: '20%',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        backgroundColor: "#0693ef",
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});
