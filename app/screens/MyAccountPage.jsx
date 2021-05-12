import React, {useState} from 'react'
import {View, SafeAreaView, Button, Text, Image, Dimensions, StyleSheet, TouchableNativeFeedback} from 'react-native';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { startSignOut } from '../redux/actions/auth';
import * as ImagePicker from 'expo-image-picker';
import {BottomSheet, ListItem} from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;

export const MyAccountPage = () => {
    const dispatch = useDispatch(); 
    const [image, setImage] = useState(null);
    const [photoFromNetwork, setPhotoFromNetwork] = useState(true);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    
    const pickImageFromCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setPhotoFromNetwork(false);
            setIsBottomSheetVisible(false);
        }
    }
    const pickImageFromGallery = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsMultipleSelection: false,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setPhotoFromNetwork(false);
            setIsBottomSheetVisible(false);
        }
    }
    const list = [
        { 
          title: 'Cámara',
          onPress: () => pickImageFromCamera(),
        },
        { 
          title: 'Galería',
          onPress: () => pickImageFromGallery(),
        },
      ];
    const user = useSelector(state => {
        return state.auth;
    });

    const handleOnPressed = () => {
        dispatch(startSignOut());
    }
    return (
        <SafeAreaView style= {styles.container}>
            <Image source={{uri: photoFromNetwork ? user.photoUrl : image}} style={{width: screenWidth * 0.4, height: screenWidth * 0.4, ...styles.profilePhoto}}/>
            <TouchableNativeFeedback
                onPress = { () => setIsBottomSheetVisible(true) }
                >
                    <Text style={{textAlign: 'center', color: 'red'}}>Cambiar de foto</Text>
            </TouchableNativeFeedback>
            <Text style={{fontSize: 22}}>{user.nombres}</Text>            
            <Text style={{fontSize: 16, marginBottom: 20}}>{user.email}</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <TouchableNativeFeedback
                onPress = { handleOnPressed }
                >
                <View style={styles.submit}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Sign out</Text>
                </View>
            </TouchableNativeFeedback>
            <BottomSheet
                isVisible={isBottomSheetVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                >
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>            
        </SafeAreaView>
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
        marginTop: 50,
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
