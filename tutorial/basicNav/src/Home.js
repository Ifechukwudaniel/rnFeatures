import React, { Component } from 'react';
import {StyleSheet ,View, Text,Button} from "react-native"

class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.mainView}>
            <Text> Home Screen </Text>
            <Button title="go to uses" onPress={()=>{this.props.navigation.navigate("Users",{
                userId:12,
                userName:"daniel",
                userLastName:"sonia"
            })}}/>
        </View>
       );
  }
}

const styles = StyleSheet.create({
    mainView:{
      flex: 1,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#fffff0',
      justifyContent: 'center',
    }
  });

  export default HomeScreen