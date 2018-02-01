import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default class LoginButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    containerStyle: PropTypes.number,
    title: PropTypes.string,
    imageSource: PropTypes.number,
    activeOpacity: PropTypes.number
  };

  static defaultProps = {
    onPress: () => {},
    disabled: false,
    activeOpacity: 0.8
  };

  render() {
    let {
      onPress,
      disabled,
      style,
      containerStyle,
      title,
      imageSource,
      activeOpacity
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={activeOpacity}
      >
        <Image source={imageSource} />
        <Text style={[styles.titleStyle, style]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  titleStyle: {
    marginLeft: 20
  }
});
