import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const UserHeader = ({url, email, nombres, estado}) => {
    return (
        <View style={styles.header}>
            <Image source={{uri: url}} style={styles.userPhoto}/>
            <View>
                <Text style={styles.userName}>{nombres}</Text>
                <Text style={styles.specialty}>{email}</Text>
                <View style={styles.status}>
                    <Text style={styles.statusText} >{estado ? "Verified" : "Unverified" }</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header : {
        backgroundColor: '#0693ef',
        height: '25%',
        justifyContent: 'flex-start',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        fontSize: 20,
        color: 'white'
    },
    specialty: {
        fontSize: 16,
        color: 'white',
        marginBottom: 10
    },
    status: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#66e34f',
        color: 'white',
        alignItems: 'center',
        borderRadius: 50
    },
    statusText: {
        color: 'white'
    },
    userPhoto: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginRight: 20
    }
});
