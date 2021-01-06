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
                <CardItem body>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Sudah Terima Kunci</Text>
                            <Text style={styles.angkaS}>75%</Text>
                        </View>
                        <View>
                            <Pie
                                radius={80}
                                innerRadius={50}
                                sections={[
                                    {
                                        percentage: 10,
                                        color: '#C70039',
                                    },
                                    {
                                        percentage: 20,
                                        color: '#44CD40',
                                    },
                                    {
                                        percentage: 30,
                                        color: '#404FCD',
                                    },
                                    {
                                        percentage: 40,
                                        color: '#EBD22F',
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