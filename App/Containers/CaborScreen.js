import { Icon, Item, Card } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image, Modal } from 'react-native'

import images from '../Themes/Images'

// Styles
import styles from './Styles/CaborScreenStyle'

export default class CaborScreen extends Component {
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
                            <Image source={images.imgCard} style={styles.ikon}
                            />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Perairan Terbuka</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Polo Air</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Artistik</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Perairan Terbuka</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Polo Air</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Renang Artistik</Text>
                        </Card>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Anggar</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Angkat Besi</Text>
                        </Card>
                        <Card style={styles.cardCabor}>
                            <Image source={images.imgCard} style={styles.ikon} />
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>Loncat Indah</Text>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
