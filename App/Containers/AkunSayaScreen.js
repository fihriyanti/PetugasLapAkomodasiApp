import { Card, Icon, Item, Left, List, ListItem, Right } from 'native-base'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/AkunSayaScreenStyle'

export default class AkunSayaScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.konten}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon type='AntDesign' name='arrowleft'
                            style={styles.iconBack}
                            onPress={() => this.props.navigation.navigate('BerandaScreen')}
                        />
                        <Text style={styles.teks}>AKUN SAYA</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.nama}>Muhammad Wahyu Hardiansyah</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>Assigned to Cluster</Text>
                                <Text style={{ fontWeight: 'bold' }}> Kabupaten Mimika</Text>
                            </View>
                        </View>
                        <Icon type='MaterialIcons' name='account-circle' style={{ fontSize: 50 }} />
                    </View>
                </View>
                {/* <View style={styles.bgAkun}>
                    <Text style={{ color: '#959595', fontSize: 15 }}>Account & Security</Text>
                </View> */}
                <List style={{marginTop: 10}}>
                    <ListItem itemDivider>
                        <Text style={{ color: '#959595' }}>Account & Security</Text>
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text>Account Information</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: 'black'}} />
                        </Right>
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text>Password & Security</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: 'black'}} />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{ color: '#959595' }}>Preferences</Text>
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text>Notification</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: 'black'}} />
                        </Right>
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text>Term & Condition</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: 'black'}} />
                        </Right>
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text>Privacy Policy</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: 'black'}} />
                        </Right>
                    </ListItem>
                    <ListItem itemDivider>
                        {/* <Text style={{ color: '#959595' }}>Preferences</Text> */}
                    </ListItem>
                    <ListItem style={{marginRight: 10}}>
                        <Left>
                            <Text style={{color: '#ff0000'}}>Log Out</Text>
                        </Left>
                        <Right>
                            <Icon type='AntDesign' name='right' style={{color: '#ff0000'}} />
                        </Right>
                    </ListItem>
                </List>
            </ScrollView>
        )
    }
}
