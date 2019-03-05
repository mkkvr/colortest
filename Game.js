import GameScreen from './GameScreen';
import groups from './groups.json';
var groupNames = new Array('Reds', 'Pinks', 'Oranges', 'Yellows', 'Purples', 'Greens', 'Blues', 'Browns', 'Whites', 'Greys') 

export class Game extends GameScreen {

  static navigationOptions = {
    title: 'Game',
  };

  constructor(props) {
      super(props)
      this.onPressButton = this.onPressButton.bind(this);
      this.state = this.build(0,0)
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

}

export default Game;