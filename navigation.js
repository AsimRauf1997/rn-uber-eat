import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home'
import ResturantDetails from './screens/ResturantDetails'
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store/store';
const store = configureStore();

export default function RootNavigator() {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown:false
    }
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
           <Stack.Navigator screenOptions={screenOptions}>
               <Stack.Screen name ="Home" component={Home}/>
               <Stack.Screen name ="RestaurantDetail" component={ResturantDetails}/>
           </Stack.Navigator>
       </NavigationContainer>
        </ReduxProvider>
       
    )
}
