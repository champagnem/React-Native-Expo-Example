import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import HomeScreen from '../screens/main-stack/HomeScreen'
import SettingsScreen from '../screens/main-stack/SettingsScreen'
import LoginScreen from '../screens/auth-stack/LoginScreen'
import MenuDrawer from '../components/UI/MenuDrawer'

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeScreen, //First screen in the stack will show first.
    Settings: SettingsScreen,
   //... Other Screens go here
  },
  {
    contentComponent: MenuDrawer,
    drawerPosition: 'right',
    backBehavior: 'history', //props.navigation.goBack() will take you to the last visited screen
    drawerWidth: '80%', //drawer will cover 80% of the device screen
  },
)

const DrawerStack = createStackNavigator( //The DrawerStack replaces your previous MainStack
  {
    App: DrawerNavigation,
  },

)

const AuthStack = createStackNavigator({
  Login: LoginScreen, //First screen in the stack will show first.
  // This is where you would add every auth related screens
  // Register: RegisterScreen,
  // ResetPassword: ResetPasswordScreen,
  //...
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Drawer: DrawerStack,
      //You can add as many stack as required
    },
    {
      initialRouteName: 'Auth', //Defines which is the default stack for your app.
    },
  ),
)
