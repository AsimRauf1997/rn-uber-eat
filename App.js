import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  Home  from './screens/Home';
import ResturantDetails from './screens/ResturantDetails';
import RootNavigator from './navigation';  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
     <RootNavigator/>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
  });
