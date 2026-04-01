import { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { initLanguage } from './i18n';

import Home from "./app/screens/Home";
import Options from "./app/screens/Options";
import Categories from "./app/screens/Categories";
import Playing from "./app/screens/Playing";
import Statistics from "./app/screens/Statistics";
import Tent from "./app/screens/Tent";

import LoadingSplash from './app/components/response/LoadingSplash'

import UserGlobalContext from "./app/server/context/user.context";
import GameGlobalContext from "./app/server/context/game.context";

const Stack = createNativeStackNavigator();

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.style = {
  fontFamily: 'Inter-Regular',
};

export default function App() {

  const [appReady, setAppReady] = useState<boolean>(false)

  useEffect(() => {
    const prepareApp = async () => {

      try {

        await Font.loadAsync({
          'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
          'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
          'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
          'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf')
        });

        await initLanguage()
        await new Promise(resolve => setTimeout(resolve, 2000))

      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
        await SplashScreen.hideAsync()
      }
    }

    prepareApp()
  }, [])

  if (!appReady) {
    return <LoadingSplash />
  }

  return (
    <NavigationContainer>
      <UserGlobalContext>
        <GameGlobalContext>
          <StatusBar barStyle={"dark-content"} />
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={Home} options={{
              animation: 'flip'
            }} />
            <Stack.Screen name="Playing" component={Playing as any} options={{
              animation: 'flip'
            }} />
            <Stack.Screen name="Categories" component={Categories as any} options={{
              animation: 'flip'
            }} />
            <Stack.Screen name="Options" component={Options} options={{
              animation: 'flip'
            }} />
            <Stack.Screen name="Statistics" component={Statistics} options={{
              animation: 'flip'
            }} />
            <Stack.Screen name="Tent" component={Tent} options={{
              animation: 'flip'
            }} />
          </Stack.Navigator>
        </GameGlobalContext>
      </UserGlobalContext>
    </NavigationContainer>
  );
}