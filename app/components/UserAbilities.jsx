import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressCircle from 'react-native-progress-circle';

export const UserAbilities = () => {
    return (
        <View style={[styles.userAbilitiesSection, styles.shadow]}>
            <View style={styles.abilityDescription}>
                <ProgressCircle
                    percent={80}
                    radius={40}
                    borderWidth={8}
                    color="#3ae098"
                    shadowColor="#aff5d9"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{'80%'}</Text>
                </ProgressCircle>
                <Text style={styles.abilityTitle}>UI/UX</Text>
            </View>
            <View style={styles.abilityDescription}>
                <ProgressCircle
                    percent={30}
                    radius={40}
                    borderWidth={8}
                    color="#ffdc38"
                    shadowColor="#feefb4"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                </ProgressCircle>
                <Text style={styles.abilityTitle}>CSS</Text>
            </View>
            <View style={styles.abilityDescription}>
                <ProgressCircle
                    percent={50}
                    radius={40}
                    borderWidth={8}
                    color="#1b5bff"
                    shadowColor="#93c2f0"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{'50%'}</Text>
                </ProgressCircle>
                <Text style={styles.abilityTitle}>HTML</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    userAbilitiesSection: {
        width: '90%',
        marginTop: '5%',
        marginLeft: '5%',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        justifyContent: 'space-between'
    },
    shadow: {
        shadowColor: "#71A7FF",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.66,
        shadowRadius: 3.84,
        elevation: 5,
    },
    abilityDescription: {
        alignItems: 'center'
    },
    abilityTitle: {
        marginTop: 10,
        color: '#8fc2b5'
    }
    
});