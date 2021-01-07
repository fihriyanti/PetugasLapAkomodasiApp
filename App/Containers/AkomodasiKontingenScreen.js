import { Card, Icon, Item } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Modal } from 'react-native'
import { Button } from 'native-base'
// import CalendarPicker from 'react-native-calendar-picker';
import { Calendar } from 'react-native-calendars';

import CardBooked from '../Components/CardBooked'
import CardInRoom from '../Components/CardInRoom'
import CardChart from '../Components/CardChart'
import CardJumlah from '../Components/CardJumlah'
import CardKedatangan from '../Components/CardKedatangan'

// Styles
import styles from './Styles/AkomodasiKontingenScreenStyle'

export default class AkomodasiKontingenScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString().substr(4, 12) : '';

        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon type='AntDesign' name='arrowleft'
                                style={styles.iconBack}
                                onPress={() => this.props.navigation.navigate("BerandaScreen")}
                            />
                            <Text style={styles.teks}>AKOMODASI KONTINGEN</Text>
                        </View>
                    </View>
                </View>
                <Card style={styles.card}>
                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 50 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.nama}>Muhammad Wahyu Hardiansyah</Text>
                            <Text>Cluster Kabupaten Mimika</Text>
                        </View>
                        <Icon type='MaterialIcons' name='history' style={{ marginTop: 10 }} />
                    </View>
                </Card>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                    <Item style={styles.search}>
                        <Icon type='MaterialIcons' name='search' style={{ marginLeft: 310 }} />
                    </Item>
                    <Icon type='FontAwesome' name='calendar-o' style={{ marginLeft: 10, marginTop: 5 }}
                        onPress={() => this.setState({ show: true })}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.see}>Kedatangan Hari Ini</Text>
                        <Text>12 Oktober</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text>Lihat semua</Text>
                        <Icon type='AntDesign' name='right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginLeft: 20, marginTop: 10 }}>
                    <CardBooked
                        namaProvinsi='DKI Jakarta'
                        namaHotel='Hotel Serayu Timika'
                        jam='10:00 WIT'
                        namaCabor='Bola Basket 5 x 5'
                    />
                    <CardInRoom
                        namaProvinsi='Aceh'
                        namaHotel='Hotel Serayu Timika'
                        jam='12:00 WIT'
                        namaCabor='Bola Tangan'
                    />
                </ScrollView>
                <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                    <Text style={{ fontSize: 20, color: '#bdbdbd' }}>⬤</Text>
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <CardChart />
                    <CardJumlah />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20 }}>
                    <Text style={styles.see}>Jadwal Kedatangan Besok</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Lihat semua</Text>
                        <Icon type='AntDesign' name='right' style={{ fontSize: 20, marginLeft: 10 }} />
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
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
                </View>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <Calendar
                                todayBackgroundColor="#e6ffe6"
                                selectedDayColor="#66ff33"
                                onDayPress={(startDate) => 
                                    {this.setState({show: false})
                                    {console.log(startDate.month + startDate.day, startDate)}}}
                                theme= {
                                    {
                                        todayTextColor: '#ffffff',
                                        todayBackgroundColor: '#f58634',
                                    }
                                }
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}
