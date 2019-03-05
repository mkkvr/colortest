import React from 'react';
import { StyleSheet, View,  Text, ScrollView } from 'react-native';
import groups from './groups.json';
var groupNames = new Array('Reds', 'Pinks', 'Oranges', 'Yellows', 'Purples', 'Greens', 'Blues', 'Browns', 'Whites', 'Greys') 

const stylesColumn = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderWidth : 0,
    },
    title: {
      fontSize : 20,
    }
  });
  

export class ColorScreen extends React.Component {

  static navigationOptions = {
    title: 'Colors',
  };

  render() {

    return (

    <ScrollView contentContainerStyle={stylesColumn.container}> 

      { groupNames.map((groupName) => {

        var styles = StyleSheet.create({list: {flexDirection: 'row', flexWrap: 'wrap',},});

        return (
          <View key={groupName}View style={stylesColumn.container}>
            <Text style={stylesColumn.title}>{groupName}</Text>
            <View style={styles.list} key={groupName}> 
          
            { groups[groupName].map((color, index, array) => {

                styles = StyleSheet.create({
                  container: {
                    backgroundColor: color.rgb, height: 75, width: 75, borderRadius: 10, borderWidth : 1,
                    alignItems: 'center', justifyContent: 'center',margin: 5,
                  },
                });  
                return( <View key={color.color} style={styles.container}><Text>{color.color}</Text></View>)
              })
            } 
            </View>
          </View>) 
      })
    }

    </ScrollView>
    );
  }
  
  }

  export default ColorScreen;