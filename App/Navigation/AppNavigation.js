import { StackNavigator } from "react-navigation";
import MainScreen from "../Containers/main/MainScreen";
import LoginScreen from '../Containers/login/LoginScreen';
import PhoneLogin from '../Containers/login/PhoneLogin'
import VerificationCode from '../Containers/login/VerificationCode'

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    MainScreen: { screen: MainScreen },
    PhoneLogin: { screen: PhoneLogin },
    VerificationCode: { screen: VerificationCode }
  },
  {
    // Default config for all screens
    headerMode: "null",
    initialRouteName: "MainScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
