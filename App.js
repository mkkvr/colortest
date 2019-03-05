
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MenuScreen from './MenuScreen';
import Game from './Game';
import EasyGame from './EasyGame'
import ColorScreen from './ColorScreen'

const MainNavigator = createStackNavigator({
  Menu: {screen: MenuScreen},
  Game: {screen: Game},
  Easy: {screen: EasyGame},
  Colors: {screen: ColorScreen},
});


const App = createAppContainer(MainNavigator);

export default App;