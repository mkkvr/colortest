import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';

const styles= StyleSheet.create({
    columns: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth : 0,
    },
    button: {
      backgroundColor: "rgb(253, 245, 230)",
      height: 75,
      width: 75,
      borderRadius: 10,
      borderWidth : 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
  });

export class MenuScreen extends React.Component {

  static navigationOptions = {
    title: 'Color Test',
    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
  };

  render() {
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.columns}>  
{/*         <TouchableOpacity onPress={() => { navigate('Easy', {title: 'Easy Game'}) }}  style={styles.button}><Text>Easy</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigate('Game', {title: 'Game'}) }}  style={styles.button}><Text>Normal</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { navigate('Colors', {title: 'Colors'}) }}  style={styles.button}><Text>Colors</Text></TouchableOpacity>
 */}
        <Button onPress={() => { navigate('Easy', {title: 'Easy Game'}) }} title="Easy"/>
        <Button onPress={() => { navigate('Game', {title: 'Game'}) }} title="Normal"/>
        <Button onPress={() => { navigate('Colors', {title: 'Colors'}) }} title="Colors"/>
  
      </View>

    );
  }
  
  }

  export default MenuScreen;