import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  teks: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.ikon,
    resizeMode: 'contain'
  },
  bgWhite: {
    marginTop: 20,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  teksBeranda: {
    margin: 20,
  },
  kabTxt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  see: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'grey',
    width: 110,
    marginBottom: 30,
  },
})
