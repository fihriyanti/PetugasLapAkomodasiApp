import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem } from 'native-base'

import styles from '../Components/Styles/CardJumlahStyles'

class CardJumlah extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Card style={styles.card3}>
                    <CardItem header>
                        <Text style={styles.headCard}>Jumlah Cabor yang sudah terima</Text>
                    </CardItem>
                    <CardItem body>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ textAlign: 'center', fontSize: 30, color: '#52d0ff' }}>75%</Text>
                                <Text >Sudah terima</Text>
                                <Text style={{ textAlign: 'center' }}>kunci</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 18, marginTop: 5 }}>####</Text>
                                    <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                        <Text>Cabor yang</Text>
                                        <Text>sudah terima</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 5 }}>
                                    <Text style={{ fontSize: 18, marginTop: 5 }}>####</Text>
                                    <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                        <Text>Kontingen yang</Text>
                                        <Text>sudah terima</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card style={styles.card3}>
                    <CardItem header>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Total Cabor</Text>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>####</Text>
                        </View>
                    </CardItem>
                    <CardItem>
                        <View style={{ flexDirection: 'column', marginTop: 8 }}>
                            <Text>Total Peserta</Text>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>####</Text>
                        </View>
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export default CardJumlah;