import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BerandaScreenStyle'
import { Card, CardItem, Icon } from 'native-base'

import CardChart from '../Components/CardChart'
import CardJumlah from '../Components/CardJumlah'

class BerandaScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.teks}>Welcome Muhammad Wahyu Hardiansyah</Text>
          <Image source={Images.ikon} style={styles.logo} />
          <Text style={styles.teks}>Accomodation App</Text>
        </View>
        <View style={styles.bgWhite}>
          <View style={styles.teksBeranda}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text>You are assigned to cluster</Text>
                <Text style={styles.kabTxt}>Kabupaten Mimika</Text>
              </View>
              <View>
                <Icon type='MaterialIcons' name='account-circle'
                  style={{ fontSize: 40 }}
                />
              </View>
            </View>
            <Text style={styles.see}>What do you want to see?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Card style={styles.card}>
                <CardItem>
                  <Icon type='MaterialIcons' name='account-circle'/>
                </CardItem>
                <CardItem>
                  <Text onPress={() => { this.props.navigation.navigate('AkomodasiKontingenScreen')}}>Kontingen</Text>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem body>
                  <Icon type='MaterialIcons' name='account-circle' />
                </CardItem>
                <CardItem footer>
                  <Text>Panpel</Text>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem body>
                  <Icon type='MaterialIcons' name='account-circle' />
                </CardItem>
                <CardItem footer>
                  <Text>Bidang lain</Text>
                </CardItem>
              </Card>
            </View>
            <CardChart />
            <CardJumlah />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BerandaScreen)
