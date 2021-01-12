import { Card, Icon, Item, Tab, Tabs } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'

import images from '../Themes/Images'

// Styles
import styles from './Styles/SearchScreenStyle'

export default class SearchScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <Text style={styles.teks}>SEARCH</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.see}>What are you looking for?</Text>
                        <Item style={styles.search}>
                            <Icon type='MaterialIcons' name='search' />
                        </Item>
                        <Text style={styles.recent}>Recent Search History</Text>
                        <Text style={{ fontStyle: 'italic' }}>you haven't search anything</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f58634' }}>
                            <Tab heading='Cabor'
                                textStyle={{ color: '#959595', fontSize: 18 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 18 }}
                            >
                                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Anggar</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAngkatBesi} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Angkat Besi</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Loncat Indah</Text>
                                    </Card>
                                </View>
                                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Renang Perairan Terbuka</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAngkatBesi} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Polo Air</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Renang Artistik</Text>
                                    </Card>
                                </View>
                                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Anggar</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAngkatBesi} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Angkat Besi</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Loncat Indah</Text>
                                    </Card>
                                </View>
                                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Anggar</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAngkatBesi} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Angkat Besi</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Loncat Indah</Text>
                                    </Card>
                                </View>
                                <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Anggar</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAngkatBesi} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Angkat Besi</Text>
                                    </Card>
                                    <Card style={styles.cardCabor}>
                                        <Image source={images.logoAnggar} style={styles.ikon}/>
                                        <Text style={{textAlign: 'center', marginTop: 10}}>Loncat Indah</Text>
                                    </Card>
                                </View>
                            </Tab>
                            <Tab heading='Kontingen'
                                textStyle={{ color: '#959595', fontSize: 18 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 18 }}
                            >
                                <Text>Kontingen</Text>
                            </Tab>
                            <Tab heading='Hotel'
                                textStyle={{ color: '#959595', fontSize: 18 }}
                                tabStyle={{ backgroundColor: 'white' }}
                                activeTabStyle={{ backgroundColor: 'white' }}
                                activeTextStyle={{ color: '#f58634', fontSize: 18 }}
                            >
                                <Text>Hotel</Text>
                            </Tab>
                        </Tabs>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
