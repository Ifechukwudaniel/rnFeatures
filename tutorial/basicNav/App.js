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
  initialRouteName: 'Home'
})


export default createAppContainer(appNavigation);
