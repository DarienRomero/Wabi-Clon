import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Linking, TouchableNativeFeedback, ScrollView } from 'react-native';
import { UserHeader } from '../components/UserHeader';
import { UserAbilities } from '../components/UserAbilities';
import { UserDescription } from '../components/UserDescription';
import { getUserById } from '../helpers/http-provider';
import { Button, Overlay } from 'react-native-elements';
import { EditDescription } from '../components/EditDescription';
// import { UserImages } from '../components/UserImages';
import { CallButton } from '../components/CallButton';
import { UserImages } from '../components/UserImages';
import { ReactReduxContext } from 'react-redux'


export const UserDetail = () => {
    const {store} = useContext(ReactReduxContext);
    console.log(store);
    
    // const [user, setUserState] = useState(props.route.params.usuario)
    return (
        <View style={styles.container}>
            {/* <UserHeader url={user.photoUrl} email={user.email} nombres={user.nombres} estado={user.estado}/> */}
            {/* <ScrollView> */}
                {/* <UserAbilities /> */}
                {/* <UserDescription about={user.about}/> */}
                {/* <UserImages/> */}
                {/* <CallButton fullPhoneNumber={user.fullPhoneNumber}/> */}
            {/* </ScrollView> */}
            <Text>User Detail</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});