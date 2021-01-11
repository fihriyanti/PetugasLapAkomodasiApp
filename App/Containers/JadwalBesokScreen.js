import { Card, Icon } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { Images } from '../Themes'

import CardKedatangan from '../Components/CardKedatangan'

// Styles
import styles from './Styles/JadwalBesokScreenStyle'

export default class JadwalBesokScreen extends Component {
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
                            <Text style={styles.teks}>JADWAL BESOK</Text>
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
                                    <Text style={{ padding: 10 }}> Bola Tangan</Text>
                                </View>
                                <Icon type='AntDesign' name='down' style={{ paddingTop: 10, fontSize: 22 }} />
                            </View>
                        </Card>
                        <Text style={{ padding: 25, fontSize: 15, color: '#f58634' }}>Filter</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <CardKedatangan
                            namaProvinsi='Aceh'
                            namaHotel='Asrama Sentra Pendidikan'
                            jam='13/10/2021 - 10:00 WIT'
                            namaCabor='Bola Tangan'
                        />
                        <CardKedatangan
                            namaProvinsi='Bali'
                            namaHotel='Asrama Sentra Pendidikan'
                            jam='13/10/2021 - 12:30 WIT'
                            namaCabor='Bola Tangan'
                        />
                        <CardKedatangan
                            namaProvinsi='DKI Jakarta'
                            namaHotel='Asrama Sentra Pendidikan'
                            jam='13/10/2021 - 12:30 WIT'
                            namaCabor='Bola Tangan'
                        />
                        <CardKedatangan
                            namaProvinsi='Yogyakarta'
                            namaHotel='Asrama Sentra Pendidikan'
                            jam='13/10/2021 - 12:30 WIT'
                            namaCabor='Bola Tangan'
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}