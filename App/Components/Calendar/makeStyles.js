/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
import { Metrics, Colors } from '../../Themes'

const DEFAULT_SELECTED_BACKGROUND_COLOR = 'rgba(0,0,0,0.0)';
const DEFAULT_SELECTED_TEXT_COLOR = '#000000';
const DEFAULT_TODAY_BACKGROUD_COLOR = 'rgba(0,0,0,0.0)';

export function makeStyles(scaler, backgroundColor, textColor, todayBackgroundColor) {
  const SELECTED_BG_COLOR = backgroundColor ? backgroundColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = textColor ? textColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUD_COLOR;
  return {
    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabel: {
      width: 40,
      fontSize: 13*scaler,
      color: Colors.loginTextColor,
      alignSelf: 'flex-start'
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff2c4'
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      width: 54*scaler,
      paddingTop: 5*scaler,
      paddingBottom: 5*scaler,
      fontSize: 12*scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 30*scaler,
      height:30*scaler,
      borderRadius: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 30*scaler,
      height:30*scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 54*scaler,
      height: 80*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    dayStar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: 10
    },

    startDayWrapper: {
      width: 50*scaler,
      height: 30*scaler,
      borderTopLeftRadius: 20*scaler,
      borderBottomLeftRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    endDayWrapper: {
      width: 50*scaler,
      height: 30*scaler,
      borderTopRightRadius: 20*scaler,
      borderBottomRightRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    inRangeDay: {
      width: 50*scaler,
      height: 30*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthLabel: {
      fontSize: 16*scaler,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      alignSelf: 'center',
      padding: 7*scaler,
      backgroundColor: '#40aeff'
    },

    monthSelector: {
      width: Metrics.screenWidth
    },

    prev: {
      textAlign: 'right'
    },

    next: {
      textAlign: 'left'
    },

    yearLabel: {
      fontSize: 14*scaler,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    }
  };
}
