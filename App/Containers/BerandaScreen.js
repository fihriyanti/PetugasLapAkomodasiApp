import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BerandaScreenStyle'

class BerandaScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.teks}>Welcome Muhammad Wahyu Hardiansyah</Text>
          <Image source={Images.ikon} style={styles.logo}/>
          <Text style={styles.teks}>To Accomodation App</Text>
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
