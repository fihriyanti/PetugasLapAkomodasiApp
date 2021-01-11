import { Card, Icon } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { Images } from '../Themes'

import CardBooked from '../Components/CardBooked'
import CardInRoom from '../Components/CardInRoom'

// Styles
import styles from './Styles/KedatanganScreenStyle'

export default class KedatanganScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type='AntDesign' name='arrowleft'
                                style={styles.iconBack}
                                onPress={() => this.props.navigation.navigate('Beranda')}
                            />
                            <Text style={styles.teks}>KEDATANGAN HARI INI</Text>
                        </View>
                        <Icon type='MaterialIcons' name='search'
                            style={styles.iconBack}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Card style={styles.card}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={styles.ikon} source={Images.imgCard} />
                                    <Text style={{ padding: 10 }}> Bola Basket 5 x 5</Text>
                                </View>
                                <Icon type='AntDesign' name='down' style={{ paddingTop: 10, fontSize: 22 }} />
                            </View>
                        </Card>
                        <Text style={{ padding: 25, fontSize: 15, color: '#f58634' }}>Filter</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <CardBooked
                            namaProvinsi='DKI Jakarta'
                            namaHotel='Hotel Serayu Timika'
                            jam='10:00 WIT'
                            namaCabor='Bola Basket 5 x 5'
                        />
                        <CardInRoom
                            namaProvinsi='Aceh'
                            namaHotel='Hotel Serayu Timika'
                            jam='12:15 WIT'
                            namaCabor='Bola Basket 5 x 5'
                        />
                        <CardInRoom
                            namaProvinsi='Bali'
                            namaHotel='Hotel Serayu Timika'
                            jam='12:30 WIT'
                            namaCabor='Bola Basket 5 x 5'
                        />
                        <CardInRoom
                            namaProvinsi='Yogyakarta'
                            namaHotel='Hotel Serayu Timika'
                            jam='12:30 WIT'
                            namaCabor='Bola Basket 5 x 5'
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}