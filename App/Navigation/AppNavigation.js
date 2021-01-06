import { createAppContainer } from 'react-navigation'
import BerandaTabScreen from '../Containers/BerandaTabScreen'
import BerandaScreen from '../Containers/BerandaScreen'
import SplashScreen from '../Containers/SplashScreen'
import LoginScreen from '../Containers/LoginScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './Styles/NavigationStyles'

// const Tab = createBottomTabNavigator();

// function MyTab() {
//   return (
//     {
//       AkomodasiKontingenScreen: AkomodasiKontingenScreen,
//       SearchScreen: SearchScreen,
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, horizontal, tintColor }) => {
//           const { routeName } = navigation.state;
//           let IconComponent = Ionicons;
//           let iconName;
//           if (routeName === 'AkomodasiKontingenScreen') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//             // Sometimes we want to add badges to some icons.
//             // You can check the implementation below.
//             IconComponent = HomeIconWithBadge;
//           } else if (routeName === 'SearchScreen') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }
  
//           // You can return any component that you like here!
//           return <IconComponent name={iconName} size={25} color={tintColor} />;
//         },
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   )
// }

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  BerandaTabScreen: { screen: BerandaTabScreen},
  BerandaScreen: { screen: BerandaScreen },
  SplashScreen: { screen: SplashScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
