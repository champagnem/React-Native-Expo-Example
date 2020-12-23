import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/main-stack/HomeScreen'
import LoginScreen from '../screens/auth-stack/LoginScreen'

const AuthStack = createStackNavigator({
  Login: LoginScreen, //First screen in the stack will show first.
  // This is where you would add every auth related screens
  // Register: RegisterScreen,
  // ResetPassword: ResetPasswordScreen,
  //...
})
const MainStack = createStackNavigator({
  Home: HomeScreen, //First screen in the stack will show first.
  //This is where you would add every screens accessible once the user is authenticated
  // Settings: SettingScreen,
  //...
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Home: MainStack,
      //You can add as many stack as required
    },
    {
      initialRouteName: 'Auth', //Defines which is the default stack for your app.
    },
  ),
)
