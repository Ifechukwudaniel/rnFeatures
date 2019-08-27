import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation"
import HomeScreen from "./src/Home"
import UserScreen from "./src/User"


const appNavigation = createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  Users:{
    screen:UserScreen
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerTitleStyle:{
      textAlign:"center",
      flex:1,
      fontWeight:"bold"
    },
    headerStyle:{
      backgroundColor: "#333aaa",
  },
    headerTintColor:"#ffffff",
  },
  
})


export default createAppContainer(appNavigation);
