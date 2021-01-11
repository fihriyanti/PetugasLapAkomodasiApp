import { createAppContainer } from 'react-navigation'
import JadwalAkomodasiScreen from '../Containers/JadwalAkomodasiScreen'
import JadwalBesokScreen from '../Containers/JadwalBesokScreen'
import KedatanganScreen from '../Containers/KedatanganScreen'
import AkunSayaScreen from '../Containers/AkunSayaScreen'
import BerandaTabScreen from '../Containers/BerandaTabScreen'
import BerandaScreen from '../Containers/BerandaScreen'
import SplashScreen from '../Containers/SplashScreen'
import LoginScreen from '../Containers/LoginScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  JadwalAkomodasiScreen: { screen: JadwalAkomodasiScreen },
  JadwalBesokScreen: { screen: JadwalBesokScreen },
  KedatanganScreen: { screen: KedatanganScreen },
  BerandaTabScreen: { screen: BerandaTabScreen },
  AkunSayaScreen: { screen: AkunSayaScreen },
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
