import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem } from 'native-base'
import Pie from 'react-native-pie'

import styles from './Styles/CardChartStyles'


class CardChart extends Component {
    render() {
        return (
            <Card style={styles.card2}>
                <CardItem header>
                    <Text style={styles.headCard}>Persentase Penerima Kunci</Text>
                </CardItem>
                <CardItem body style={{justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Sudah Terima Kunci</Text>
                            <Text style={styles.angkaS}>75%</Text>
                        </View>
                        <View>
                            <Pie
                                radius={50}
                                innerRadius={30}
                                sections={[
                                    {
                                        percentage: 25,
                                        color: '#ee5555',
                                    },
                                    {
                                        percentage: 75,
                                        color: '#52d0ff',
                                    },
                                ]}
                                strokeCap={'butt'}
                            />
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