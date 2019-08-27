import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation"
import HomeScreen from "./src/Home"
import UserScreen from "./src/User"
import Logo from "./src/Logo"


const appNavigation = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:({ navigation})=>({
      title:"Home",
      headerTitle:Logo
    })
    },
  Users:{
    screen:UserScreen
  }
}, {
  initialRouteName: 'Home',
  headerMode:"float",
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
  transparentCard:true,
})


export default createAppContainer(appNavigation);
