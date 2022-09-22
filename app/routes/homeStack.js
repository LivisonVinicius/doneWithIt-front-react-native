import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import HomeScreen from "../screens/HomeScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  ViewImage: {
    screen: ViewImageScreen,
    navigationOptions: {
      header: null,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
