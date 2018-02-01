import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Calendar from '../../Components/Calendar/index'

export default class WeekScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedStartDate: '',
    }

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    })
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return(
      <View style={styles.container}>
        <Calendar
          onDateChange={this.onDateChange}
        />
        {/* <Text>{startDate}</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})