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
    alignSelf: 'center'
  },
  txtCabor: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15, 
    fontWeight: 'bold',
  },
  txtHotel: {
    marginVertical: 10,
    fontSize: 15,
  },
  cardCabor: {
    width: '100%',
    // marginTop: 20,
    backgroundColor: '#f4f5f7',
    borderRadius: 10,
    padding: 20,
  },
  logoProp: {
    height: Metrics.images.medium,
    width: Metrics.images.medium,
  },
  btnSS: {
    height: 20,
    width: 90,
    backgroundColor: '#ff0000',
    textAlign: 'right'

  },
  txtBtn: {
    color: 'white',
    fontSize: 10
  },
  modal: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 100,
      padding: 15,
      flex:1
  },
  bgModal: {
      backgroundColor: '#9e9e9eaa',
      flex: 1,
  },
  txtMod: {
    color: '#959595',
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    marginVertical: 20,
    backgroundColor: '#f4f5f7',
    height: 45,
    borderRadius: 20,
    justifyContent: 'flex-end'
  },
  cardNoKamar: {
    width: 60,
    height: 32,
    backgroundColor: '#f4f5f7',
    borderRadius: 10
  },
  btnUpdate: {
    backgroundColor: '#f58634',
    borderRadius: 10,
    width: 80,
    height: 60,
    padding: 15
  },
  txtBtnUpdate: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15
  }
})