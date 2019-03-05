
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MenuScreen from './src/MenuScreen';
import Game from './src/Game';
import EasyGame from './src/EasyGame'
import ColorScreen from './src/ColorScreen'

const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen},
  Game: {screen: Game},
  Easy: {screen: EasyGame},
  Colors: {screen: ColorScreen},
});


const App = createAppContainer(MainNavigator);

export default App;