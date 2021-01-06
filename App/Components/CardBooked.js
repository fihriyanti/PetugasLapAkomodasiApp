import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'native-base'
import { Images } from '../Themes'

import styles from './Styles/CardBookedStyles'

const CardBooked = (props) => {
    return (
        <Card style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={Images.imgCard} style={styles.ikon} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.nama}>{props.namaProvinsi}</Text>
                            <Text>{props.namaHotel}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.txtBooked}>Booked</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: '#959595' }}>Rencana Jam Tiba</Text>
                            <Text>{props.jam}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginLeft: 40 }}>
                    <Image source={Images.imgCard} style={styles.ikon} />
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{props.namaCabor}</Text>
                </View>
            </View>
        </Card>
    )
}

export default CardBooked;