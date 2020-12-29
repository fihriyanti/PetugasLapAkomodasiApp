import { Button, Input, Item } from 'native-base'
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={Images.ikon} style={styles.logo} />
          <Text style={styles.teks}>MOBILE WORKFORCE ACCOMODATION APP</Text>
          <Item regular style={styles.item1}>
            <Input placeholder='Username'/>
          </Item>
          <Item regular style={styles.item2}>
            <Input placeholder='Password'/>
          </Item>
          <Button block warning style={styles.btnLogin}
          onPress={() => {this.props.navigation.navigate('BerandaScreen')}}>
            <Text style={styles.teksLogin}>Login</Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
