import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    margin: 20,
  },
  konten: {
    backgroundColor: '#bf272b',
    width: '100%',
    padding: 15,
  },
  iconBack: {
    fontSize: 35, 
    fontWeight: 'bold', 
    color: 'white',
  },
  teks: {
    color: 'white',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  ikon: {
    height: Metrics.images.large,
    width: Metrics.images.large,
  },
  txtCabor: {
    marginLeft: 20, 
    fontSize: 25, 
    fontWeight: 'bold', 
    marginTop: 15
  },
  txtHotel: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardCabor: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#f4f5f7',
    borderRadius: 10,
    padding: 20,
  },
  logoProp: {
    height: Metrics.images.medium,
    width: Metrics.images.medium,
  },
  btnSS: {
    height: 22,
    width: 95,
    marginTop: 10,
    backgroundColor: '#36b373',
    textAlign: 'right'

  },
  txtBtn: {
    color: 'white',
    fontSize: 10
  }
})