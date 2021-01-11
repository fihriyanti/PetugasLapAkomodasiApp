import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    card2: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'grey',
    },
    headCard: {
        color: 'grey',
        fontWeight: 'bold'
    },
    angkaS: {
        color: '#52d0ff',
        fontSize: 25,
        textAlign: 'center'
    },
    angkaB: {
        color: '#ee5555',
        fontSize: 25,
        textAlign: 'center'
    },
})