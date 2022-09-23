import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductScreen from "../screens/ProductScreen";

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
  ViewImage: {
    screen: ViewImageScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
  Product: {
    screen: ProductScreen,
    navigationOptions: {
      headerShown: false,
      ...TransitionPresets.FadeFromBottomAndroid,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
