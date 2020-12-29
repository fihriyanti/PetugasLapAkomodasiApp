import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  teks: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
})
