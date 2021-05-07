import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import _ from 'lodash';

export const Item = (props) => {
    return (

        <TouchableOpacity style={styles.containerIcon}
            onPress={props.onPress}>
            <View style={styles.container}>
                {
                    !_.isNil(props.icon) ?
                        <Image
                            resizeMode="contain"
                            source={props.icon}
                            style={{ width: 15, height: 15, marginLeft:20 }} />
                        : null
                }
                <Text style={styles.title}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginLeft: 15,
        height: 60,
        // backgroundColor:"red",
        
        width:Dimensions.get('window').width * 0.6,
        // backgroundColor:"red",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"
    },
    containerIcon: {
        // marginLeft: 10,
        // backgroundColor:"green",
        height: 45,
        // width: 30,
        // paddingHorizontal: 20,
        backgroundColor:"#fff",
        borderBottomColor:"#F4F5FA",
        borderBottomWidth:1,
        // marginRight: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: '#072856',
        fontSize: 13,
        // lineHeight: 16,
        marginLeft:10,
        fontFamily: 'nunito-sans-semibold',
        // marginLeft:10
        // marginHorizontal: 10,
        // width: Dimensions.get('window').width - 40,
    },

});

export default Item;
