import 'react-native-gesture-handler';
import React,{useState, useEffect, useRef} from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { store } from './app/redux/store/store';
import {Provider} from 'react-redux';
import loadAssets from './app/util/loadAssets';
import {ActiveRoutes} from './app/routes/ActiveRoutes';
import messaging from '@react-native-firebase/messaging';
/* import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants'; */

/* Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
}); */
const App = () => {
  /* const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(); */

  useEffect(() => {
    _loadAssetsAsync();
    getFCMToken();
    
    
    
    /* registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("Se recibió una notificación");
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    }; */
  }, []);
  
  return (
    <Provider store={store}>
      <ActiveRoutes />
    </Provider>
  );
}
/* const registerForPushNotificationsAsync = async () => {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
} */
const _loadAssetsAsync = async() => {
  try {
    await SplashScreen.preventAutoHideAsync();
    await loadAssets();
    await SplashScreen.hideAsync();

  } catch (e) {
  } finally {
  }
}
const getFCMToken = async() => {
  const authorizationStatus = await messaging().requestPermission();
  console.log('Permission status:', authorizationStatus);
  if (authorizationStatus) {
    console.log('Permission status:', authorizationStatus);
    const token = await messaging().getFirebaseToken();
    console.log(token);
  }
}
export default App;