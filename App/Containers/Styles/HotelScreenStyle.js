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
    height: 100,
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
  card: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  search: {
      backgroundColor: '#f4f5f7',
      height: 45,
      borderRadius: 20,
  },
  see: {
    color: '#959595',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ikon: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    alignSelf: 'flex-end'
  },
})
