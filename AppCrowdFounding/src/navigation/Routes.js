import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import SplashScreens from '../screens/SplashScreen';

const Stack = createStackNavigator()

const MainNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
    </Stack.Navigator>
)

const Routes = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 3000)

    },[])

    if(isLoading) {
        return <SplashScreens />
    }

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default Routes