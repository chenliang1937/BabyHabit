import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal, FlatList } from 'react-native'
import { Tabs } from 'antd-mobile'
import { Images, Metrics, Colors } from '../../Themes'
import DayScreen from './DayScreen'
import MonthScreen from './MonthScreen'
import CalendarPicker from '../../Components/CalendarPicker/index'
import HeaderControls from '../../Components/CalendarPicker/HeaderControls'
import { Utils } from '../../Components/CalendarPicker/Utils'

const tabs = [
  { title: '日' },
  { title: '月' }
];

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisiable: false,
      visiableScreen: 1
    }

    this._calendarPress = this._calendarPress.bind(this)
    this._onDateChange = this._onDateChange.bind(this)
    this._renderItem = this._renderItem.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
    this._yearItemClick = this._yearItemClick.bind(this)
  }

  _calendarPress(){
    this.setState({
      modalVisiable: true
    })
  }

  _onDateChange() {
    this.setState({
      modalVisiable: false,
      visiableScreen: 1
    })
  }

  _yearItemClick() {
    this.setState({
      modalVisiable: false,
      visiableScreen: 2
    })
  }

  _keyExtractor = (item, index) => index

  _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.yearItem} onPress={this._yearItemClick}>
      <Text style={styles.yearItemText}>{item}</Text>
    </TouchableOpacity>
  )

  render () {

    return (
      <View style={styles.container}>
        <ImageBackground source={Images.mainBg} style={styles.background}>
          <View style={styles.title}>
            <View style={styles.headerGrop}>
              <Text style={styles.name}>大宝</Text>
              <TouchableOpacity>
                <Image source={Images.boyHover} style={styles.header}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.calendarBtn} onPress={this._calendarPress}>
              <Image source={Images.calendarIcon}></Image>
              <Text style={styles.month}>10月</Text>
              <Text style={styles.day}>26</Text>
            </TouchableOpacity>
          </View>

          {
            this.state.visiableScreen === 1 ? <DayScreen/> : <MonthScreen/>
          }

          <View style={styles.bottom}>
            <Image source={Images.gift} style={styles.gift}></Image>
            <View style={styles.star}>
              <Image source={Images.menuStar}></Image>
              <Text style={styles.starText}>0</Text>
            </View>
            <Image source={Images.editIcon} style={styles.edit}></Image>
          </View>
        </ImageBackground>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisiable}>
            <View style={styles.modalContnt}>
              <View style={styles.modalTab}>
                <Tabs tabs={tabs} initialPage={0}>
                  <View style={styles.calendar}>
                    <CalendarPicker onDateChange={this._onDateChange}/>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <FlatList
                      data={Utils.MONTHS}
                      numColumns={4}
                      renderItem={this._renderItem}
                      keyExtractor={this._keyExtractor}
                    />
                  </View>
                </Tabs>
              </View>
            </View>
        </Modal>
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
  title: {
    marginTop: Metrics.metrics25,
    flexDirection: 'row'
  },
  headerGrop: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5
  },
  calendarBtn: {
    flex: 1,
    justifyContent: 'center',
    marginRight: Metrics.metrics16
  },
  header: {
    width: Metrics.metrics60,
    height: Metrics.metrics60,
    marginLeft: -132,
    borderRadius: 30, // 设置圆角
    borderWidth: 3,
    borderColor: Colors.borderColor,
    resizeMode: 'cover' // 设置填充模式
  },
  name: {
    width: 130,
    height: 50,
    textAlign: 'right',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 10,
    marginLeft: Metrics.metrics16,
    borderRadius: 22, // 设置圆角
    borderWidth: 3,
    color: 'white',
    fontSize: 18,
    borderColor: Colors.borderColor,
  },
  month: {
    position: 'absolute',
    left: 13,
    top: 13,
    color: 'white'
  },
  day: {
    position: 'absolute',
    left: 18,
    bottom: 10
  },
  bottom: {
    position: 'absolute',
    justifyContent: "space-around",
    left: 1,
    bottom: 10,
    right: 1,
    flexDirection: 'row'
  },
  gift: {
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starText: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.textColor
  },
  edit: {
  },
  modalContnt: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0, 0, 0, 0.3)'
  },
  modalTab: {
    height:Metrics.screenHeight - 250,
    width:Metrics.screenWidth - 20,
    backgroundColor:'white',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  tab: {
    width:100
  },
  calendar: {
    marginTop: 10
  },
  yearItem: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 35,
    borderColor: Colors.grayColor,
    borderRadius: 5,
    margin: 7
  },
  yearItemText: {
    backgroundColor:'rgba(0, 0, 0, 0)'
  }
})