import React, {useState} from 'react'
import { SafeAreaView, StyleSheet,View, Text, TextInput, Dimensions, ScrollView, TouchableNativeFeedback } from 'react-native'
import {searchAddresses} from '../helpers/http-provider';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import { startSetAddress } from '../redux/actions/address';

const screenWidth = Dimensions.get('window').width;

export const SelectAddressPage = ({navigation}) => {
    const [addressesList, setAddressesList] = useState([]);
    const [addressSearch, setAddressSearch] = useState("")
    const dispatch = useDispatch(); 
    let timer;
    
    const handleSearchChange = (e) => {
        setAddressSearch(e);
        if(timer) clearTimeout(timer);
        timer = setTimeout( async () =>{
            const addresses = await searchAddresses(e);
            setAddressesList(addresses);
        }, 1000);
    }
    const selectItem = (address) => {
        dispatch(startSetAddress(address.name, address.geometry.location.lat, address.geometry.location.lng));
        navigation.pop();
        navigation.push('SignInPage')
    }
    
    return (
        <SafeAreaView style= {{margin: screenWidth * 0.1 ,...styles.container}}>
            <View style={styles.backIcon}>
                <TouchableNativeFeedback
                    onPress={()=> {navigation.pop()}}
                >
                    <Icon
                        name='arrow-back'
                        type='material'
                        color='red'
                        size= {36}
                    />
                </TouchableNativeFeedback> 
            </View>
            <TextInput
                keyboardType="default"
                style= {[styles.searchAddressInput]}
                placeholder = "Busca una dirección"
                placeholderTextColor = '#6a6e6b'
                onChangeText={handleSearchChange}
                value={addressSearch}
            />
            <ScrollView
                showsVerticalScrollIndicator = {false}
            >
                {
                    addressesList.map((e) => 
                    <TouchableNativeFeedback
                        onPress={() => selectItem(e)}
                        key={e.place_id}
                    >
                        <Text style= {styles.item}>{e.name}</Text>
                    </TouchableNativeFeedback>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchAddressInput: {
        width: '100%',
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 50,
        color: '#6b6b6b',
        textAlignVertical: 'center',
        paddingLeft: '4%',
        marginBottom: '5%',
        
    },
    item: {
        paddingVertical: 10,
        textAlign: 'left'
    },
    backIcon: {
        flexDirection: 'row', 
        width: '100%',
        marginBottom: 20
    }
});
