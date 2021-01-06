import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#9b0000',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.ikon,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 20,
  },
  teks: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  item1: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  item2: {
    height: 40,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'white',
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  btnLogin: {
    backgroundColor: '#f58634',
    margin: 20,
    height: Metrics.images.large,
  },
  teksLogin: {
    color: 'white',
    fontSize: 15
  },
  input: {
    color: 'black'
  },
})
