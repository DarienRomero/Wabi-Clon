import 'react-native-gesture-handler';
import React,{useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './app/navigation/StackNavigator';
import { store } from './app/redux/store/store';
import {Provider} from 'react-redux';
import loadAssets from './app/util/loadAssets';


const App = () => {
  const _loadAssetsAsync = async() => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await loadAssets();  
      await SplashScreen.hideAsync();
  
    } catch (e) {
    } finally {
    }
  }

  useEffect(() => {
    _loadAssetsAsync();
  }, [])
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}
export default App;