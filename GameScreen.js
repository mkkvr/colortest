import React from 'react';
import { Button, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import groups from './groups.json';

var groupNames = new Array('Reds', 'Pinks', 'Oranges', 'Yellows', 'Purples', 'Greens', 'Blues', 'Browns', 'Whites', 'Greys') 

export class GameScreen extends React.Component {

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
  
    onPressButton(color, rgb) {
      var count = this.state.count
      var rightCount = this.state.rightCount
  
      count++;
  
      if (rgb == this.state.right.rgb) 
        rightCount++
      this.setState(this.build(rightCount,count));
    }
  
    build(rightCount, count) {
      var groupNumber = this.getRandomInt(groupNames.length)
      var groupName = groupNames[groupNumber]
      var groupLength = groups[groupName].length
  
      var rightNumber = this.getRandomInt(groupLength)
      var rightItem = groups[groupName][rightNumber]
      var rightIndex = this.getRandomInt(3);
  
      var items = [3];
      var otherNumber = rightNumber
  
      for (i = 0; i < 3; i++) {
        if (rightIndex == i) items[i]=rightItem
        else {
          itemNumber = rightNumber
          while (itemNumber == rightNumber || itemNumber == otherNumber)
            itemNumber = this.getRandomInt(groupLength)
          items[i] = groups[groupName][itemNumber]
          otherNumber = itemNumber
        }
      }
      
      var newState = {right: rightItem, index: rightIndex, items: items, rightCount: rightCount, count: count}
      return newState;
  
    }
  
    constructor(props) {
      super(props)
      this.onPressButton = this.onPressButton.bind(this);
      this.state = this.build(0,0)
    }
  
    render() {
  
      const { navigate } = this.props.navigation;
  
      return (
  
        <View style={stylesColumn.container}>  
        
          <StatusBar backgroundColor="blue" barStyle="dark-content" hidden = {false} />
  
          <View style={stylesTitle.container}>
            <Text style={stylesPoints.container}>{this.state.rightCount}/{this.state.count}</Text>
            <Text style={stylesText.container}>{this.state.right.color}</Text>
          </View>
  
          <View style={stylesRow.container}>
            <ColorButton text={this.state.items[0].color} color={this.state.items[0].color} rgb={this.state.items[0].rgb} function={this.onPressButton}/>
            <ColorButton text={this.state.items[1].color} color={this.state.items[1].color} rgb={this.state.items[1].rgb} function={this.onPressButton}/>
            <ColorButton text={this.state.items[2].color} color={this.state.items[2].color} rgb={this.state.items[2].rgb} function={this.onPressButton}/>
          </View>
  
          <View style={stylesRow.container}>
            <Button title="Restart" onPress={() => { this.setState(this.build(0,0)) }}/>
          </View>
  
        </View>
  
      );
    }
  
  }
  
  const stylesColumn = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth : 0,
    },
  });
  
  const stylesTitle = StyleSheet.create({
    container: {
      flex: 0.5,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth : 0,
    },
  });
  
  const stylesRow = StyleSheet.create({
    container: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth : 0,
    },
  });
  
  const stylesText = StyleSheet.create({
    container: {
      fontSize: 30,
      fontWeight: 'bold',
    }
  });
  
  const stylesPoints = StyleSheet.create({
    container: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  });
  
  
  class ColorButton extends React.Component {
  
    //TODO: use state instad of props!
    constructor(props) {
      super(props)
    }
  
    setColors() {
      styles = StyleSheet.create({
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
        <View style={stylesRow.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.function(this.props.color, this.props.rgb)
          }}
          style={styles.container}
          >
          {/*  <Text>{this.props.color}</Text> */}
        </TouchableOpacity>
        </View>
      )}
  }

export default GameScreen;