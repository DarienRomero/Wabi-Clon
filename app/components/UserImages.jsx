import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-banner-carousel';
const {width, height} = Dimensions.get('window');

export const UserImages = () => {
    const images = [
        "https://picsum.photos/300/200",
        "https://picsum.photos/300/200",
        "https://picsum.photos/300/200",
    ];
    const renderPage = (image, index) => {
        return (
            <View key={index}>
                <Image style={{ width: width * 0.8, height: 150 }} source={{ uri: image }} />
            </View>
        );
    }
    return (
        <View style= {styles.carouselContainer}>
            <Text style= {[styles.descriptionTitle, styles.descriptionText]}>Portfolio</Text>
            <View style= {styles.carousel}>
                <Carousel
                    index={0}
                    pageSize={width}
                >
                    {images.map((image, index) => renderPage(image, index))}
                </Carousel>
            </View>
        </View>
    );   
}
const styles = StyleSheet.create({
    carouselContainer: {
        marginHorizontal: '10%',
        marginVertical: '5%'
    },
    descriptionTitle: {
        marginBottom: '2%',
        fontSize: 16
    },
    descriptionText: {
        color: '#a2afdc'
    },
    carousel: {
        borderRadius: 20
    }
});
