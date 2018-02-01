import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Toast } from 'antd-mobile'

import { Metrics, Colors } from "../Themes";

class PinCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: new Array(props.number).fill(""),
      edit: 0
    };

    this.textInputsRefs = [];
  }

  clean = () => {
    this.setState({
      code: new Array(this.props.number).fill(""),
      edit: 0
    });
    this.focus(0);
  };

  focus = id => {
    this.textInputsRefs[id].focus();
  };

  isFocus = id => {
    let newCode = this.state.code.slice();

    for (let i = 0; i < newCode.length; i++) {
      if (i >= id) {
        newCode[i] = "";
      }
    }

    this.setState({
      code: newCode,
      edit: id
    });
  };

  handleEdit = (number, id) => {
    let newCode = this.state.code.slice();
    newCode[id] = number;

    // User filling the last pin ?
    if (id === this.props.number - 1) {
      // But it's different than code
      if (this.props.code !== newCode.join("")) {
        this.focus(0);

        this.setState({
          code: new Array(this.props.number).fill(""),
          edit: 0
        });

        Toast.fail('验证码错误', 1)

        return;
      } else {
        this.setState({
          code: newCode,
          edit: this.state.edit
        });

        this.props.success();
      }

      return;
    }

    this.focus(this.state.edit + 1);

    this.setState(prevState => {
      return {
        code: newCode,
        edit: prevState.edit + 1
      };
    });
  };

  render() {
    const {
      number,
      success,
      pinStyle,
      containerStyle,
      containerPinStyle,
      ...props
    } = this.props;

    pins = [];

    for (let index = 0; index < number; index++) {
      const id = index;
      pins.push(
        <TextInput
          key={id}
          ref={ref => (this.textInputsRefs[id] = ref)}
          onChangeText={text => this.handleEdit(text, id)}
          onFocus={() => this.isFocus(id)}
          value={this.state.code[id] ? this.state.code[id].toString() : ""}
          style={[pinStyle, styles.pin]}
          returnKeyType={"done"}
          autoCapitalize={"sentences"}
          autoCorrect={false}
          keyboardType={"numeric"}
          {...props}
        />
      );
    }

    return (
      <View style={[styles.containerPin, containerPinStyle]}>{pins}</View>
    );
  }
}

PinCode.propTypes = {
  code: PropTypes.string.isRequired,
  success: PropTypes.func.isRequired,
  number: PropTypes.number,
  pinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerPinStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

PinCode.defaultProps = {
  number: 4,
  pinStyle: {},
  containerPinStyle: {},
  containerStyle: {}
};

const styles = StyleSheet.create({
  containerPin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  pin: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    height: 45,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.borderColor,
    borderRadius: 7
  }
});

export default PinCode;
