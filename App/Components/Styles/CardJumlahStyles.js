import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    card3: {
      marginTop: 30,
      borderRadius: 10,
      backgroundColor: 'grey',
      marginBottom: 10
    },
    headCard: {
        color: 'grey',
        fontWeight: 'bold'
    },
})