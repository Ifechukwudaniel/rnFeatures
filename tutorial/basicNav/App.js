import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {createAppContainer,createBottomTabNavigator, createStackNavigator, createDrawerNavigator} from "react-navigation"
import HomeScreen from "./src/Home"
import UserScreen from "./src/User"
import Logo from "./src/Logo"
import SideDrawer from "./src/SideDrawer"


// const appNavigation = createStackNavigator({
//   Home:{
//     screen:HomeScreen,
//     navigationOptions:({ navigation})=>({
//       title:"Home",
//       headerTitle:Logo
//     })
//     },
//   Users:{
//     screen:UserScreen
//   }
// }, {
//   initialRouteName: 'Home',
//   headerMode:"float",
//   defaultNavigationOptions:{
//     headerTitleStyle:{
//       textAlign:"center",
//       flex:1,
//       fontWeight:"bold"
//     },
//     headerStyle:{
//       backgroundColor: "#333aaa",
//   },
//     headerTintColor:"#ffffff",
//   },
//   transparentCard:true,
// })

// const appNavigation = createDrawerNavigator({
//    Home:{
//      screen:HomeScreen,
//     //  navigationOptions:({ navigation})=>({
//     //   drawerLabel:"welcome",
//     //   drawerIcon:Logo
//     //  })
//    },
//    Users:UserScreen
// }, {
//   contentComponent:SideDrawer,
//   contentOptions:{
//     activeTintColor: '#e91e63',
//     activeBackgroundColor:"#a39494",
//     itemsContainerStyle: {
//       marginVertical: 10,
//     },
//   iconContainerStyle: {
//     opacity: 1
//   }
//   },
//   drawerType:"slide",
//   drawerWidth:200,
//   drawerBackgroundColor:"#ffffff",
//   drawerPosition:"right",
// })
const appNavigation= createBottomTabNavigator({
  Home:HomeScreen,
  Users:UserScreen
},{
  initialRouteName:"Users",
   order:["Users", "Home"],
   tabBarOptions:{
    //  activeBackgroundColor:"#dbdbdb",
    //  activeTintColor:"red",
     showLabel:true,
     allowFontScaling:true,
     style:{
       backgroundColor: "green",
     },
     labelStyle:{
       fontSize: 20,
     },
   },
   defaultNavigationOptions:({})=>({
     tabBarOnPress:({navigation,defaultHandler})=>{
       if(navigation.state.routeName==="Home"){
         alert("Do You what to Leave")
         navigation.navigate("Home")
       }
       else{
       defaultHandler()          
       }
     }  
  })
})


export default createAppContainer(appNavigation);
