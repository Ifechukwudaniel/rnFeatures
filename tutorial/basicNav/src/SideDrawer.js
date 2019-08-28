import React, { Component } from 'react'
import {ScrollView, Text, View, StyleSheet, Image} from "react-native"
import {NavigationActions} from "react-navigation"
import Logo from "./assets/images/download.jpg"

export default class SideDrawer  extends Component {
    navigateToScreen=(route)=>()=>{
        const navigateAction = NavigationActions.navigate({
            routeName:route
        })
        this.props.navigation.dispatch(navigateAction)
    }
    render() {
        return (
        <View>
            <ScrollView>
            <View>
               <View style={styles.navImageContainer}>
                  <Image
                   source={Logo}
                   style={styles.image}
                  />
               </View>
               <Text style={styles.sectionHeadingStyle}> 
                  Section 1
               </Text>
               <View style={ styles.navSectionStyle}>
                  <Text
                  style={styles.navItem}
                  onPress={this.navigateToScreen("Home")}
                  >
                  Home
                  </Text>
                  <Text
                  style={styles.navItem}
                  onPress={this.navigateToScreen("Users")}
                  >
                  Users
                  </Text>
                  <Text
                  style={styles.navItem}
                  onPress={this.navigateToScreen("Home")}
                  >
                  Contact
                  </Text>
                  <Text
                  style={styles.navItem}
                  onPress={this.navigateToScreen("Users")}
                  >
                  Uploads
                  </Text>
               </View>
            </View>
            </ScrollView>
            <View style={styles.footerContainer}>
               <Text> Copyright @Byte 2019 </Text>
            </View>
        </View>  
        )
    }
}

const styles =  StyleSheet.create({
  container:{
      flex: 1,
      paddingTop: 20,
  },
  navImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  image:{
      width:50,
      height:50
  },
  sectionHeadingStyle:{
      color:'#fff',
      backgroundColor: '#04b6ff',
      paddingHorizontal: 10,
      paddingVertical: 10,

  },
  navSectionStyle:{
      backgroundColor: "#2e2e2e"
  },
  navItem:{
   color:"#fff",
   padding:15
  },
  footerContainer:{
      marginTop: 210,
      padding:20,
      alignItems: 'baseline',
      backgroundColor: "lightgray", 
  }
})
