import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginHorizontal: 20,
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
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bgAkun: {
    backgroundColor: '#f4f5f7', 
    padding: 20
  },
})
