import React from 'react'
import {ScrollView, Image, StyleSheet, Dimensions, Text, View, TouchableNativeFeedback} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const BrandsScroll = ({onSelection}) => {

    const brands = [
        {
            id: 1,
            route: require('../../assets/images/brands/coca_cola.png'),
            brand: 'Coca Cola'
        },
        {
            id: 2,
            route: require('../../assets/images/brands/gatorade.png'),
            brand: 'Gatorade'
        },
        {
            id: 3,
            route: require('../../assets/images/brands/lays.png'),
            brand: 'Lays'
        },
        {
            id: 4,
            route: require('../../assets/images/brands/pepsi.png'),
            brand: 'Pepsi'
        },
    ]
    return (
        <View style= {styles.brandsScroll}>
            <Text style={{marginVertical: 20, fontSize: 16, fontWeight: '600'}}>¿Qué necesitas de tu tienda?</Text>
            <ScrollView
                horizontal= {true}
                showsHorizontalScrollIndicator= {false}
            >
                {
                    brands.map((brandItem) => 
                        <TouchableNativeFeedback
                            onPress={() => onSelection(brandItem.brand)}
                            key={brandItem.id}
                        >
                            <Image 
                                source={brandItem.route}
                                resizeMode = 'contain'
                                style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                            />
                        </TouchableNativeFeedback>
                    )
                }
                {/* <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/coca_cola.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/gatorade.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/lays.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/pepsi.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/coca_cola.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => handleOnSelection()}
                >
                    <Image 
                        source={require('../../assets/images/brands/coca_cola.png')}
                        resizeMode = 'contain'
                        style= {{width: screenWidth * 0.25, height: screenWidth * 0.25, ...styles.brandContainer}}
                    />
                </TouchableNativeFeedback> */}
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
