import GameScreen from './GameScreen';
import colors from './colors.json'; 

export class EasyGame extends GameScreen {

  static navigationOptions = {
    title: 'Easy Game',
  };

  build(rightCount, count, lastColor) {
    var groupLength = colors['colors'].length
    var rightNumber = this.getRandomInt(groupLength)
    var rightItem = colors['colors'][rightNumber]
    var rightIndex = this.getRandomInt(3);

    var items = [3];
    var otherNumber = rightNumber

    for (i = 0; i < 3; i++) {
      if (rightIndex == i) items[i]=rightItem
      else {
        itemNumber = rightNumber
        while (itemNumber == rightNumber || itemNumber == otherNumber)
          itemNumber = this.getRandomInt(groupLength)
        items[i] = colors['colors'][itemNumber]
        otherNumber = itemNumber
      }
    }
    
    var newState = {right: rightItem, index: rightIndex, items: items, rightCount: rightCount, count: count, lastColor: lastColor}
    return newState;
  
  }

}

export default EasyGame;