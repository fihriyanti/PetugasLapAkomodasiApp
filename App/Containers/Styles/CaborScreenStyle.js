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
  teks: {
    color: 'white',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  see: {
    color: '#959595',
    fontSize: 15,
    fontWeight: 'bold',
  },
  search: {
    marginTop: 10,
    backgroundColor: '#f4f5f7',
    height: 45,
    borderRadius: 20,
    justifyContent: 'flex-end'
  },
  cardCabor: {
    width: '30%',
    height: 100,
    padding: 5,
    backgroundColor: '#f4f5f7',
    borderRadius: 10,
  },
  ikon: {
    height: Metrics.images.medium,
    width: Metrics.images.medium,
    alignSelf: 'center',
    marginTop: 5
  },
  modal: {
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 20,
      marginLeft: 50,
      marginRight: 50,
      padding: 15
  },
  bgModal: {
      backgroundColor: '#9e9e9eaa',
      flex: 1,
      justifyContent: 'center',
  },
})