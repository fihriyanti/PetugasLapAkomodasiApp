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
    height: Metrics.images.medium,
    width: Metrics.images.medium,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    width: '70%'
  },
})
