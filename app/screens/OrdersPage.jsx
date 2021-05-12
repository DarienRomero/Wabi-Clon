import React from 'react'
import {View, Text, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {SkeletonContent} from 'react-native-skeleton-content';
export const OrdersPage = () => {
    return (
        <View style= {styles.container}>
            <View style= {styles.titleBanner}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Mi carrito</Text>
            </View>
            <Image 
                style= {styles.headerImage}
                source={require('../assets/images/orders_page_header.png') }
            />
            <View style= {styles.subtitleBanner}>
                <Text style={{color: 'grey', fontWeight: 'normal', fontSize: 16}}>Aún no tenés productos en el carrito</Text>
                <Text style={{color: '#d1d1d1', fontWeight: 'normal', fontSize: 16, textAlign: 'center'}}>¡Seleccioná los productos que te gusten y recibilos donde quieras¡</Text>
            </View>
            <TouchableNativeFeedback>
                <View style= {styles.toProductsButton}>
                    <Text style={{color: 'white', fontWeight: 'normal', fontSize: 16}}>HACER PEDIDO</Text>
                </View>
            </TouchableNativeFeedback>
            {/* <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={false}
                layout={[
                    { key: 'someId', width: 220, height: 20, marginBottom: 6 },
                    { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
                ]}>
            </SkeletonContent>  */}           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerImage: {
        width: '100%',
        height: '25%'
    },
    titleBanner: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    subtitleBanner: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toProductsButton: {
        width: '90%',
        marginHorizontal: '5%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 100,
        position: 'absolute',
        bottom: 10
    }
});
