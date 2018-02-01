import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Metrics, Colors } from "../Themes";

export default class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: this.props.timerCount || 60,
      timerTitle: this.props.timerTitle || "获取验证码",
      counting: false,
      selfEnable: true
    };

    this.shouldStartCounting = this.shouldStartCounting.bind(this);
    this.countDownAction = this.countDownAction.bind(this);
  }

  static propTypes = {
    style: PropTypes.object,
    textStyle: PropTypes.object,
    onClick: PropTypes.func,
    disableColor: PropTypes.string,
    timerTitle: PropTypes.string,
    enable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
  };

  countDownAction() {
    const codeTime = this.state.timerCount;
    this.interval = setInterval(() => {
      const timer = this.state.timerCount - 1;
      if (timer === 0) {
        this.interval && clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: this.props.timerTitle || "获取验证码",
          counting: false,
          selfEnable: true
        });
      } else {
        this.setState({
          timerCount: timer,
          timerTitle: `重新获取(${timer}s)`
        });
      }
    }, 1000);
  }

  shouldStartCounting(shouldStart) {
    if (this.state.counting) {
      return;
    }
    if (shouldStart) {
      this.countDownAction();
      this.setState({ counting: true, selfEnable: false });
    } else {
      this.setState({ selfEnable: true });
    }
  }

  componentDidMount() {
    this.shouldStartCounting(true)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { onClick, style, textStyle, disableColor } = this.props;
    const { counting, timerTitle, selfEnable } = this.state;
    return (
      <TouchableOpacity
        activeOpacity={counting ? 1 : 0.8}
        onPress={() => {
          if (!counting && selfEnable) {
            this.setState({ selfEnable: false });
            this.shouldStartCounting(true);
          }
        }}
      >
        <View style={styles.styleCodeView}>
          <Text
            style={[
              { fontSize: 12 },
              textStyle,
              {
                color:
                  !counting && selfEnable
                    ? textStyle.color
                    : disableColor || "gray"
              }
            ]}
          >
            {timerTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  styleCodeView: {
    height: 28,
    justifyContent: "center"
  },
  styleTextCode: {
    fontSize: 12,
    color: Colors.textGrayColor,
    textAlign: "center"
  }
});
