import { Icon, ListItem, Tab, Tabs, Button, Right, Body, Item, Card } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image, Modal } from 'react-native'

import images from '../Themes/Images'

// Styles
import styles from './Styles/RincianAlokasiCaborScreenStyle'

export default class RincianAlokasiCaborScreen extends Component {
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
                            onPress={() => this.props.navigation.navigate('AlokasiCaborScreen')}
                        />
                        <Text style={styles.teks}>RINCIAN ALOKASI CABOR</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={styles.txtCabor}>DKI Jakarta</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={styles.txtCabor}>Bola Basket 5 x 5</Text>
                        </View>
                    </View>
                    <Text style={styles.txtHotel}>Hotel Serayu Timika</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#9e9e9e', fontSize: 12 }}>Rencana Check In - Out :</Text>
                            <Text style={{ fontSize: 12, marginLeft: 5 }}>12/10/2021 - 27/10/2021</Text>
                        </View>
                        <Text style={{ fontSize: 12, marginLeft: 70, color: '#f58634' }}>Ubah</Text>
                    </View>
                    <View style={{ backgroundColor: '#f4f5f7', borderRadius: 10, marginTop: 10, padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: '#9e9e9e' }}>Total Peserta</Text>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>10</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: '#9e9e9e' }}>Jumlah Kamar</Text>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>10</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ color: '#9e9e9e' }}>Status saat ini:</Text>
                                <Button full rounded style={styles.btnSS}>
                                    <Text style={styles.txtBtn}>Booked</Text>
                                </Button>
                            </View>
                            <Text style={{ fontSize: 12, color: '#f58634', alignSelf: 'flex-end' }}>Ubah</Text>
                        </View>
                    </View>
                </View>
                <ListItem itemDivider />
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18 }}>Rincian Kamar</Text>
                        <Text style={{ fontSize: 15, color: '#f58634', marginTop: 3 }}
                            onPress={() => this.setState({ show: true })}
                        >Update Kamar</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f58634' }}>
                            <Tab heading='Atlit'
                                textStyle={{ color: '#959595', fontSize: 15 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text>Nama</Text>
                                    <Text>Nomor Kamar</Text>
                                </View>
                                <ListItem>
                                    <Body>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                            <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Farhan Ukrin Putra Prana Dharma</Text>
                                                <Text>Atlit</Text>
                                            </View>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text>-</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                            <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Zharfan Muhtadi</Text>
                                                <Text>Atlit</Text>
                                            </View>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text>-</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                            <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Akmal Yanuar</Text>
                                                <Text>Atlit</Text>
                                            </View>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text>-</Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                            <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rizal Ahmad Hasan</Text>
                                                <Text>Atlit</Text>
                                            </View>
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text>-</Text>
                                    </Right>
                                </ListItem>
                            </Tab>
                            <Tab heading='Official'
                                textStyle={{ color: '#959595', fontSize: 15 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                            >
                                <Text>Official</Text>
                            </Tab>
                            <Tab heading='Non Official'
                                textStyle={{ color: '#959595', fontSize: 15 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                            >
                                <Text>Non Official</Text>
                            </Tab>
                        </Tabs>
                    </View>
                </View>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txtMod}>Update Kamar</Text>
                                <Icon type='AntDesign' name='close'
                                    onPress={() => this.setState({ show: false })}
                                />
                            </View>
                            <Item style={styles.search}>
                                <Icon type='MaterialIcons' name='search' />
                            </Item>
                            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f58634' }}>
                                <Tab heading='Atlit'
                                    textStyle={{ color: '#959595', fontSize: 15 }}
                                    tabStyle={{ backgroundColor: 'white' }}
                                    activeTabStyle={{ backgroundColor: 'white' }}
                                    activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                        <Text>Nama</Text>
                                        <Text>Nomor Kamar</Text>
                                    </View>
                                    <ListItem>
                                        <Body>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Farhan Ukrin Putra Prana Dharma</Text>
                                                    <Text>Atlit</Text>
                                                </View>
                                            </View>
                                        </Body>
                                        <Right>
                                            <Card style={styles.cardNoKamar}></Card>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Body>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Zharfan Muhtadi</Text>
                                                    <Text>Atlit</Text>
                                                </View>
                                            </View>
                                        </Body>
                                        <Right>
                                            <Card style={styles.cardNoKamar}></Card>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Body>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Akmal Yanuar</Text>
                                                    <Text>Atlit</Text>
                                                </View>
                                            </View>
                                        </Body>
                                        <Right>
                                            <Card style={styles.cardNoKamar}></Card>
                                        </Right>
                                    </ListItem>
                                    <ListItem>
                                        <Body>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 35 }} />
                                                <View style={{ flexDirection: 'column', marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rizal Ahmad Hasan</Text>
                                                    <Text>Atlit</Text>
                                                </View>
                                            </View>
                                        </Body>
                                        <Right>
                                            <Card style={styles.cardNoKamar}></Card>
                                        </Right>
                                    </ListItem>
                                </Tab>
                                <Tab heading='Official'
                                    textStyle={{ color: '#959595', fontSize: 15 }}
                                    tabStyle={{ backgroundColor: 'white' }}
                                    activeTabStyle={{ backgroundColor: 'white' }}
                                    activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                                >
                                    <Text>Official</Text>
                                </Tab>
                                <Tab heading='Non Official'
                                    textStyle={{ color: '#959595', fontSize: 15 }}
                                    tabStyle={{ backgroundColor: 'white' }}
                                    activeTabStyle={{ backgroundColor: 'white' }}
                                    activeTextStyle={{ color: '#f58634', fontSize: 15 }}
                                >
                                    <Text>Non Official</Text>
                                </Tab>
                            </Tabs>
                            <View style={{ backgroundColor: '#f4f5f7', borderRadius: 10, marginTop: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: '#9e9e9e', fontSize: 12 }}>Jumlah Peserta yang Diupdate</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text>Atlit</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>10</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text>Official</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>10</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text>Non Official</Text>
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>10</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Button style={styles.btnUpdate}
                                        onPress={() => this.setState({ show: false})}
                                    >
                                        <Text style={styles.txtBtnUpdate}>Update</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}
