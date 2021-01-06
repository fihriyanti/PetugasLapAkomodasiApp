import { Card, Icon, Item } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

import CardBooked from '../Components/CardBooked'
import CardInRoom from '../Components/CardInRoom'
import CardChart from '../Components/CardChart'
import CardJumlah from '../Components/CardJumlah'
import CardKedatangan from '../Components/CardKedatangan'

// Styles
import styles from './Styles/CaborScreenStyle'

export default class CaborScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type='AntDesign' name='arrowleft'
                                style={styles.iconBack}
                            />
                            <Text style={styles.teks}>CABOR</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
