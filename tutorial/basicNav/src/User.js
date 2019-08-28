import React, { Component } from 'react';
import {StyleSheet ,View, Text, Button} from "react-native"
import {DrawerActions} from 'react-navigation'

class UserScreen extends Component {
    static navigationOptions={
        title: 'Users',
        headerStyle:{
            backgroundColor: "#433530",
        },
        headerTintColor:"#ffffff",
        headerTitleStyle:{
            flex:1,
            fontWeight:"bold",
        }
    }
  render() {
    // const userName = this.props.navigation.getParam("userName", "N/A")
    // const userLastName = this.props.navigation.getParam("userLastName")
    return ( 
        <View style={styles.mainView}>
            <Text> User Screen </Text>
            {/* <Text>{userName} </Text>
            <Text>{userLastName} </Text> */}
            <Button title="Open Side Drawer" onPress={()=>this.props.navigation.openDrawer()}/>
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