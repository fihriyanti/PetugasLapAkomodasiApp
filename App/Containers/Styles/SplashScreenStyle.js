import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,  
  container: {
    flex: 1,
    backgroundColor: '#9b0000',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  teks: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
})
