import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    card3: {
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: 'grey',
      marginBottom: 10
    },
    headCard: {
        color: 'grey',
        fontWeight: 'bold'
    },
})