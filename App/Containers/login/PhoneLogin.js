import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, BackHandler, ImageBackground } from "react-native";
import { InputItem } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'
import { Metrics, Images, Colors } from "../../Themes";
import LoginButton from "../../Components/LoginButton";

export default class PhoneLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this._onChangeText = this._onChangeText.bind(this);
    this._loginBtnClick = this._loginBtnClick.bind(this);
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  _onChangeText(text) {
    this.setState({ text });
  }

  _loginBtnClick() {
    this.props.navigation.navigate("VerificationCode", { phoneNumber: this.state.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.loginBg} style={styles.background}>
          <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
            <Image style={styles.backButtonIcon} source={Images.backIcon} />
            <Text style={styles.backButtonText}>手机号登录</Text>
          </TouchableOpacity>
          <View style={styles.inputBox}>
            <InputItem
              type={'phone'}
              style={styles.phoneBox}
              placeholder="请输入手机号"
              clear
              onChangeText={this._onChangeText}
            />
          </View>
          <LoginButton
            title="下一步"
            style={{ color: "white", fontSize: 18 }}
            containerStyle={styles.btn}
            onPress={this._loginBtnClick}
          />
        </ImageBackground>
      </View>
    );
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
  inputBox: {
    marginTop: Metrics.metrics30
  },
  phoneBox: {
    height: Metrics.metrics40,
    padding: Metrics.metrics5
  },
  btn: {
    backgroundColor: Colors.loginBtnColor,
    marginTop: Metrics.metrics20,
    marginLeft: Metrics.metrics30,
    marginRight: Metrics.metrics30,
    height: Metrics.metrics45,
    borderRadius: 7
  }
});
