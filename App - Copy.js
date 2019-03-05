import React from 'react';
import { Alert, Button, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import json from './colors.json';
import groups from './groups.json';

var groupNames = new Array('reds', 'pinks', 'oranges', 'yellows', 'purples', 'greens', 'blues', 'browns', 'whites', 'greys') 

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class App extends React.Component {

  onPressButton(color, rgb) {
    var count = this.state.count
    var rightCount = this.state.rightCount

    count++;

    if (rgb == this.state.right.rgb) 
      rightCount++
    this.setState(this.build(rightCount,count));
  }

  build(rightCount, count) {
    // var rightItem = json['colors'][getRandomInt(100)]

    var groupNumber = getRandomInt(groupNames.length)
    var groupName = groupNames[groupNumber]
    var groupLength = groups[groupName].length

    var rightNumber = getRandomInt(groupLength)
    var rightItem = groups[groupName][rightNumber]
    var rightIndex = getRandomInt(3);

    var items = [3];
    var otherNumber = rightNumber

    for (i = 0; i < 3; i++) {
      if (rightIndex == i) items[i]=rightItem
      // else items[i] = json['colors'][getRandomInt(100)]
      else {
        itemNumber = rightNumber
        while (itemNumber == rightNumber || itemNumber == otherNumber)
          itemNumber = getRandomInt(groupLength)
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
          <Button title="Menu" onPress={() => { }}/>
          <Button title="Restart" onPress={() => { this.state = this.build(0,0) }}/>
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
