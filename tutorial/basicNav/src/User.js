import React, { Component } from 'react';
import {StyleSheet ,View, Text, Button
} from "react-native"

class UserScreen extends Component {
    static navigationOptions={
        title: 'Users',
        headerStyle:{
            backgroundColor: "#333aaa",
        },
        headerTintColor:"#ffffff",
        headerTitleStyle:{
            color:"#ffffff",
            fontSize: 20,
        }
    }
  render() {
    const userName = this.props.navigation.getParam("userName", "N/A")
    const userLastName = this.props.navigation.getParam("userLastName")
    return ( 
        <View style={styles.mainView}>
            <Text> User Screen </Text>
            <Text>{userName} </Text>
            <Text>{userLastName} </Text>
            <Button title="go to home" onPress={()=> this.props.navigation.navigate("Home")}/>
        </View>
       );
  }
}

const styles = StyleSheet.create({
    mainView:{
      flex: 1,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#ff0',
      justifyContent: 'center',
    }
  });

  export default UserScreen