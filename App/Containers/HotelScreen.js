import { Card, Icon, Item } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/HotelScreenStyle'

export default class HotelScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type='AntDesign' name='arrowleft'
                                style={styles.iconBack}
                            />
                            <Text style={styles.teks}>HOTEL</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
