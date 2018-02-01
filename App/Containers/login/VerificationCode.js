import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TextInput, ImageBackground, BackHandler, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'

import { Toast } from 'antd-mobile'
import TimerButton from '../../Components/TimerButton'
import { Colors, Images, Metrics } from '../../Themes'
import PinCode from '../../Components/PinCode'

export default class VerificationCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phoneNumber: ''
    }
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
    const {params} = this.props.navigation.state;
    this.setState({
      phoneNumber: params.phoneNumber
    })
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  onSuccess = () => {
    this.ref.focus(0)
    this.props.navigation.navigate("MainScreen");
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.loginBg} style={styles.background}>
          <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
            <Image style={styles.backButtonIcon} source={Images.backIcon} />
            <Text style={styles.backButtonText}>手机号登录</Text>
          </TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.text}>验证码已发送至 { this.state.phoneNumber }</Text>
            <TimerButton
              timerCount={60}
              textStyle={{color: Colors.textGrayColor,fontSize: 14}}
              onClick={(start) => {}}/>
          </View>

          <KeyboardAvoidingView
            behavior={'position'}
            keyboardVerticalOffset={-30}>
            <PinCode
              ref={ref => (this.ref = ref)}
              code="1234"
              success={this.onSuccess}/>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "rgba(0,0,0,0)" // 祛除内部元素的白色背景
  },
  backButton: {
    paddingTop: Metrics.metrics30,
    paddingBottom: Metrics.metrics15,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.theme
  },
  backButtonIcon: {
    marginRight: Metrics.baseMargin
  },
  backButtonText: {
    fontSize: Metrics.metrics17,
    letterSpacing: 0,
    backgroundColor: Colors.transparent,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: Colors.textColor,
    marginTop: 50
  },
  content: {
    marginLeft: 30,
    marginRight: 30
  }
})