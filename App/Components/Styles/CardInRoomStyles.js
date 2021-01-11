import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    card: {
        width: '100%',
        height: 120,
        backgroundColor: '#f4f5f7',
        padding: 10,
        borderRadius: 10,
        marginRight: 10
    },
    nama: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    txtBooked: {
        backgroundColor: 'green',
        borderRadius: 10,
        width: 80,
        height: 20,
        textAlign: 'center',
        color: 'white',
        marginRight: 10,
        marginTop: 10
    },
    ikon: {
      height: Metrics.images.large,
      width: Metrics.images.large,
      alignSelf: 'flex-end'
    },
})