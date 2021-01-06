import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem } from 'native-base'

import styles from './Styles/CardChartStyles'

class CardChart extends Component {
    render() {
        return (
            <Card style={styles.card2}>
                <CardItem header>
                    <Text style={styles.headCard}>Persentase Penerima Kunci</Text>
                </CardItem>
                <CardItem body>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Sudah Terima Kunci</Text>
                            <Text style={styles.angkaS}>75%</Text>
                        </View>
                        <View>
                            <Text>Pie Chart</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Sudah Terima Kunci</Text>
                            <Text style={styles.angkaB}>25%</Text>
                        </View>
                    </View>
                </CardItem>
            </Card>
        )
    }
}

export default CardChart;