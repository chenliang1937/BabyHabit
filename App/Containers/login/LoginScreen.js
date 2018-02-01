import React, { Component } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import LoginButton from "../../Components/LoginButton";

import { Images, Metrics, Fonts, Colors } from "../../Themes";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this._phoneBtnClick = this._phoneBtnClick.bind(this);
  }

  _phoneBtnClick() {
    this.props.navigation.navigate("PhoneLogin");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.loginScreenBg} style={styles.background} />
        <View style={styles.content}>
          <Image source={Images.loginScreenSlogan} style={styles.slogan} />
          <Image source={Images.loginIcon} style={styles.icon} />
          <Text style={styles.text}>推荐登录方式</Text>
          <LoginButton
            title="微信登录"
            style={{ color: "white", fontSize: 18 }}
            containerStyle={styles.btn}
            imageSource={Images.wechatIcon}
          />
          <LoginButton
            title="手机号登录"
            style={{ color: "white", fontSize: 18 }}
            containerStyle={styles.btn}
            imageSource={Images.phoneIcon}
            onPress={this._phoneBtnClick}
          />
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    width: null,
    height: null,
    resizeMode: Image.resizeMode.contain, // 不加这句，就是按照屏幕高度自适应;加上这句，就是按照屏幕自适应
    backgroundColor: "rgba(0,0,0,0)" // 祛除内部元素的白色背景
  },
  content: {
    flex: 1,
    position: "absolute"
  },
  slogan: {
    width: Metrics.screenWidth,
    resizeMode: Image.resizeMode.contain,
    marginTop: Metrics.metrics103
  },
  icon: {
    width: Metrics.screenWidth,
    resizeMode: Image.resizeMode.contain,
    marginTop: Metrics.metrics45
  },
  text: {
    fontSize: Fonts.size.h5,
    textAlign: "center",
    backgroundColor: "transparent",
    marginTop: Metrics.metrics30,
    color: Colors.loginTextColor
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
