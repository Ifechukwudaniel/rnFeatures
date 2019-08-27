import React, { Component } from 'react';
import {StyleSheet ,View, Text,Button} from "react-native"

class HomeScreen extends Component {
    static navigationOptions= ({navigation})=>{
     return{
         headerLeft:(
             <Button title="B" onPress={()=>navigation.navigate('Users')}/>
         ),
         headerRight:(
             <Button title="X" onPress={()=>navigation.navigate('Users')}/>
         )
     }
    }
  render() {
    console.log(this.props)
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