import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native'
import { Overlay } from 'react-native-elements';

export const UserDescription = ({about}) => {
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState(about);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View style= {styles.descriptionContainer}>
            <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style= {[styles.descriptionTitle, styles.descriptionText]}>Description</Text>
                <TouchableNativeFeedback
                    onPress = {toggleOverlay}>
                    <Text style={{color: '#0693ef'}} >Edit</Text>
            </TouchableNativeFeedback>
            </View>
            <View style= {styles.shadow}>
                <Text style= {styles.descriptionText}>
                {about}
                </Text>
            </View>
            <View style= {styles.dialogContainer}>
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text>Edit description</Text>
                        <TextInput
                            multiline= {true}
                            numberOfLines={4}
                            scrollEnabled
                            style= {[styles.inputEmail]}
                            placeholder = "Description"
                            placeholderTextColor = '#6a6e6b'
                            onChangeText={text => setDescription(text)}
                            value={description}
                        />    
                </Overlay>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    descriptionContainer: {
        marginHorizontal: '10%',
        marginTop: '5%',
    },
    descriptionTitle: {
        marginBottom: '2%',
        fontSize: 16
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
    descriptionText: {
        color: '#a2afdc',
        textAlign: 'justify'
    },
    inputEmail:{
        width: '60%',
        borderColor: '#0693ef',
        borderWidth: 1,
        borderRadius: 10,
        color: '#6a6e6b',
        textAlignVertical: 'center',
        paddingLeft: '4%',
        marginBottom: '5%'
    },
    dialogContainer:{
        marginHorizontal: '20%'
    }

});