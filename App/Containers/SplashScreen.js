import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends Component {

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate("LoginScreen");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={Images.ikon} style={styles.logo} />
          <Text style={styles.teks}>MOBILE WORKFORCE ACCOMODATION APP</Text>
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
