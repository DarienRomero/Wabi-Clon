import React from 'react'
import { HEIGHT_NAVIGATION, PADDING_TOP_DRAWER } from '../../config/constants';
import i18n from '../../config/i18n';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {Item} from './item';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { startSignOut } from '../../redux/actions/auth';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

const screenWidth = Dimensions.get('window').width;

export const CustomDrawerContent = (props) => {
    const user = useSelector(state => {
        return state.auth;
    });
    const dispatch = useDispatch(); 

    return (
        <DrawerContentScrollView contentContainerStyle={{ flex: 1 }} {...props}>
            <View style={{
                width: screenWidth * 0.6,
                backgroundColor:"red",
                paddingTop: HEIGHT_NAVIGATION + PADDING_TOP_DRAWER,
            }}>
            <Text numberOfLines={1} style={[styles.title]}> {i18n.t('header.hello', { name:user.nombres })}</Text>
            <Text numberOfLines={1} style={[styles.subtitle]}> {user.email}</Text>
            </View>
            <View style={{width: screenWidth * 0.6, flex:1, backgroundColor:"#F4F5FA"}}>
                <Item icon={require('../../assets/images/drawer/ico_home.png')} name={i18n.t("drawer.home")} />
                <Item icon={require('../../assets/images/drawer/ico_profile.png')} name={i18n.t("drawer.profile")} />
                <Item icon={require('../../assets/images/drawer/ico_favorite.png')} name={i18n.t("drawer.favorites")} />
                <Item icon={require('../../assets/images/drawer/ico_email.png')} name={i18n.t("drawer.contact")} />
                <Item icon={require('../../assets/images/drawer/ico_tyc.png')} name={i18n.t("drawer.tyc")} />
                <Item icon={require('../../assets/images/drawer/ico_change_password.png')} name={i18n.t("drawer.update_password")} />
                <Item icon={require('../../assets/images/drawer/ico_logout.png')} name={i18n.t("drawer.logout")} onPress={() => {
                    dispatch(startSignOut());
                }}/>
            </View>
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    title: {
        lineHeight: 28,
        fontSize: 16,
        fontFamily: 'roboto-medium',
        color: '#FFF',
        marginLeft: 20,
    },
    subtitle: {
        lineHeight: 14,
        color:"#fff",
        fontSize: 13,
        fontFamily: 'nunito-sans-regular',
        marginLeft: 20,
        marginBottom:15
    },
});