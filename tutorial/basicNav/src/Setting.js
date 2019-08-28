import React, { Component } from 'react';
import {StyleSheet ,View, Text, Button} from "react-native"
import {DrawerActions} from 'react-navigation'

class SettingScreen extends Component {
   
  render() {
    return ( 
        <View style={styles.mainView}>
            <Text> Setting Screen </Text>
            <Button title="Go To Users" onPress= {()=>this.props.navigation.navigate("Users")}/>
        </View>
       );
  }
}

const styles = StyleSheet.create({
    mainView:{
      flex: 1,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#ff4542',
      justifyContent: 'center',
    }
  });

  export default SettingScreen