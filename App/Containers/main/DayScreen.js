import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import DayItem from './DayItem'

export default class DayScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }

    this._renderItem = this._renderItem.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    let data = [
      {
        id: '1',
        name: '早睡早起'
      }, {
        id: '2',
        name: '写作业'
      }
    ]
    this.setState({
      dataSource: data
    })
  }

  _renderItem = ({ item }) => (
    <DayItem key={item.id} onSelect={() => this._loadPage(item)} item={item}></DayItem>
  )

  _loadPage(item) {
    alert(item.name)
  }

  _keyExtractor = (item, index) => item.id

  render() {
    return(
      <FlatList
        data={this.state.dataSource}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

const styles = StyleSheet.create({

})