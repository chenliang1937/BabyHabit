import React, { Component } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View, ImageBackground, Button } from 'react-native'

import { Metrics, Colors, Images } from '../../Themes'

export default class MainItem extends Component{
  constructor(props){
    super(props)
    let item = this.props.item
    this.state = {
      item: item,
      starIcon: Images.starNormal
    }

    this._starPress = this._starPress.bind(this)
  }

  _starPress() {
    this.setState({
      starIcon: Images.clickedStar
    })
  }
  
  render() {
    let item = this.state.item
    return(
      <TouchableOpacity onPress={this.props.onSelect} style={styles.container}>
        <ImageBackground source={Images.mainCardBg} style={styles.background}>
          <Text style={styles.time}>12:30</Text>
          <View style={styles.content}>
            <Image source={Images.taskBrushingFace}></Image>
            <View style={styles.column}>
              <View style={styles.title}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Image source={Images.cameraIcon} style={styles.camera}></Image>
              </View>
              <View style={styles.monthStar}>
                <Text style={styles.starText}>本月获得</Text>
                <Image source={Images.monthRecordStar} style={styles.starImg}></Image>
                <Text style={styles.stars}>10</Text>
              </View>
            </View>
            <TouchableOpacity onPress={this._starPress} style={styles.starIcon}>
              <Image source={this.state.starIcon}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10
  },
  background: {
    width: Metrics.screenWidth - 32,
    height: 135,
    backgroundColor: "rgba(0,0,0,0)" // 祛除内部元素的白色背景
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 10
  },
  time: {
    position: 'absolute',
    left: 45,
    top: 5,
    color: Colors.textColor
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  monthStar: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10
  },
  titleText: {
    color: Colors.textColor,
    fontSize: 18
  },
  camera: {
    marginLeft: 5,
    marginRight: 5
  },
  starText: {
    color: Colors.textGrayColor
  },
  starImg: {
    marginLeft: 5
  },
  stars: {
    marginLeft: 3
  },
  starIcon: {
    position: 'absolute',
    alignItems: 'center',
    right: 10
  }
})