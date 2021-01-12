import { Icon, Item, Card, ListItem, CardItem, Button, } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

import images from '../Themes/Images'

// Styles
import styles from './Styles/AlokasiCaborScreenStyle'

export default class AlokasiCaborScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon type='AntDesign' name='arrowleft'
                            style={styles.iconBack}
                            onPress={() => this.props.navigation.navigate('Cabor')}
                        />
                        <Text style={styles.teks}>ALOKASI CABOR</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={images.logoAnggar} style={styles.ikon} />
                        <Text style={styles.txtCabor}>Anggar</Text>
                    </View>
                    <Text style={styles.txtHotel}>Hotel Aston Jayapura</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#9e9e9e', fontSize: 15 }}>Rencana Check In - Out :</Text>
                            <Text style={{ color: '#9e9e9e', fontSize: 15 }}>Total Peserta</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18 }}>##/##/## - ##/##/##</Text>
                            <Text style={{ fontSize: 18 }}>20</Text>
                        </View>
                    </View>
                </View>
                <ListItem itemDivider />
                <View style={styles.container}>
                    <Text style={{marginBottom: 20}}>Daftar Kontingen pada Cabor ini</Text>
                    <Card style={styles.cardCabor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={images.logoPapua} style={styles.logoProp} />
                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Papua</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 12 }}>Jumlah Peserta</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> 10 </Text>
                                        <Text style={{ fontSize: 12 }}>|</Text>
                                        <Text style={{ fontSize: 12 }}> Jumlah Kamar</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> 10</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Button full rounded style={styles.btnSS}>
                                    <Text style={styles.txtBtn}>Sudah Sampai</Text>
                                </Button>
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.cardCabor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={images.imgCard} style={styles.logoProp} />
                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>DKI Jakarta</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 12 }}>Jumlah Peserta</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> 10 </Text>
                                        <Text style={{ fontSize: 12 }}>|</Text>
                                        <Text style={{ fontSize: 12 }}> Jumlah Kamar</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> 10</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Button full rounded style={styles.btnSS}
                                    onPress={() => {this.props.navigation.navigate('RincianAlokasiCaborScreen')}}
                                >
                                    <Text style={styles.txtBtn}>Sudah sampai</Text>
                                </Button>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}
