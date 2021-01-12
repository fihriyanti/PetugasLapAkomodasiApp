import { Icon, Item, Card, } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image, Modal } from 'react-native'

import images from '../Themes/Images'

// Styles
import styles from './Styles/CaborScreenStyle'

export default class CaborScreen extends Component {
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
                    <Text style={styles.teks}>CABOR</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.see}>Search Cabor you are looking for?</Text>
                        <Item style={styles.search}>
                            <Icon type='MaterialIcons' name='search' />
                        </Item>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon}
                            />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}
                                onPress={() => this.setState({ show: true })}
                            >Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Perairan Terbuka</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Polo Air</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Artistik</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Perairan Terbuka</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Polo Air</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Artistik</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAnggar} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.logoAngkatBesi} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                </View>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <Text onPress={() => this.setState({ show: false })}
                                style={styles.see}
                            >
                                Klik salah satu hotel
                            </Text>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Icon type='Octicons' name='primitive-dot' style={{color: '#bdbdbd', fontSize: 20}}/>
                                <Text style={{marginLeft: 5, fontSize: 15}}
                                    onPress={() => {
                                        this.props.navigation.navigate('AlokasiCaborScreen');
                                        this.setState({ show: false })
                                    }}
                                >Aston Hotel Jayapura</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Icon type='Octicons' name='primitive-dot' style={{color: '#bdbdbd', fontSize: 20, marginTop: 5}}/>
                                <Text style={{marginLeft: 5, fontSize: 15}}
                                    onPress={() => {
                                        this.props.navigation.navigate('AlokasiCaborScreen');
                                        this.setState({ show: false })
                                    }}
                                >Sunny Garden Lake Hotel and Resort Manage by Parkside</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}
