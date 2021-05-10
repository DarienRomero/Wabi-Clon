import React from 'react'
import {ScrollView, Image, StyleSheet, Dimensions, Text, View} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const BrandsScroll = () => {
    return (
        <View style= {styles.brandsScroll}>
            <Text style={{marginVertical: 20, fontSize: 16, fontWeight: '600'}}>¿Qué necesitas de tu tienda?</Text>
            <ScrollView
                horizontal= {true}
                showsHorizontalScrollIndicator= {false}
            >
                <Image 
                    source={require('../../assets/images/brands/coca_cola.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
                <Image 
                    source={require('../../assets/images/brands/gatorade.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
                <Image 
                    source={require('../../assets/images/brands/lays.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
                <Image 
                    source={require('../../assets/images/brands/pepsi.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
                <Image 
                    source={require('../../assets/images/brands/coca_cola.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
                <Image 
                    source={require('../../assets/images/brands/coca_cola.png')}
                    resizeMode = 'contain'
                    style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                />
            </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
    brandsScroll: {
        marginHorizontal: '5%',
        marginBottom: '5%'
    },
    brandContainer: {
        borderRadius: 300,
        marginRight: 20
    }
});
