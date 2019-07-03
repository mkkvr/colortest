import React from 'react';
import { Button, StyleSheet, Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';
import groups from './groups.json';

var groupNames = new Array('Reds', 'Pinks', 'Oranges', 'Yellows', 'Purples', 'Greens', 'Blues', 'Browns', 'Whites', 'Greys') 

export class GameScreen extends React.Component {

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    onPressButton(color, rgb) {
      var count = this.state.count
      var rightCount = this.state.rightCount
      var { navigate } = this.props.navigation;
  
      count++;
  
      var lastRight = 'red';
      if (rgb == this.state.right.rgb) {
        rightCount++
        lastRight = 'green';
      }

      this.setState(this.build(rightCount,count,lastRight));

      if (count == 25) {
        var scoreMessage = 'Go learn some more!'
        if (rightCount > 15) scoreMessage = 'You seem to know something'
        if (rightCount > 20) scoreMessage = 'That is not too bad!'
        Alert.alert(
          'Game completed',
          scoreMessage,
          [
            {text: 'Return', onPress: () => navigate('Menu', {title: 'Color Test'})},
            {text: 'Continue', onPress: () => console.log('Continue')},
            {text: 'Restart', onPress: () => this.setState(this.build(0,0,0))},
            
          ],
          {cancelable: false},
        );
      }
    }
  
    //     build(rightCount, count, lastColor)  ==> in sub classes
  
    constructor(props) {
      super(props)
      this.onPressButton = this.onPressButton.bind(this);
      this.state = this.build(0,0, 'black')
    }
  
    render() {
  
      const { navigate } = this.props.navigation;
  
      return (
  
        <View style={styles.column}>  
        
          <StatusBar backgroundColor="blue" barStyle="dark-content" hidden = {false} />
  
          <View style={styles.title}>
            <Text style={[stylesPoints.normal, {color : this.state.lastColor}]}>{this.state.rightCount}/{this.state.count}</Text>
            <Text style={styles.text}>{this.state.right.color}</Text>
          </View>
  
          <View style={styles.row}>
            <ColorButton text={this.state.items[0].color} color={this.state.items[0].color} rgb={this.state.items[0].rgb} function={this.onPressButton}/>
            <ColorButton text={this.state.items[1].color} color={this.state.items[1].color} rgb={this.state.items[1].rgb} function={this.onPressButton}/>
            <ColorButton text={this.state.items[2].color} color={this.state.items[2].color} rgb={this.state.items[2].rgb} function={this.onPressButton}/>
          </View>
  
          <View style={styles.row}>
            <Button title="Restart" onPress={() => { this.setState(this.build(0,0,0)) }}/>
          </View>
  
        </View>
  
      );
    }
  
  }
  
  const styles = StyleSheet.create({
    column: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth : 0,
    },
   title: {
      flex: 0.5,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth : 0,
    },
    row: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth : 0,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    }
  });
  
  const stylesPoints = StyleSheet.create({
    normal: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    green: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green'
    },
    red: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
    }
  });
  
  
  class ColorButton extends React.Component {
  
    //TODO: use state instad of props!
    constructor(props) {
      super(props)
    }
  
    setColors() {
      stylesForColors = StyleSheet.create({
        container: {
           backgroundColor: this.props.rgb,
           height: 100,
           width: 100,
           borderRadius: 15,
           borderWidth : 1,
        },
      });
    }
  
    render() {
  
      this.setColors()
  
      return (
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            this.props.function(this.props.color, this.props.rgb)
          }}
          style={stylesForColors.container}
          >
          {/*  <Text>{this.props.color}</Text> */}
        </TouchableOpacity>
        </View>
      )}
  }

export default GameScreen;