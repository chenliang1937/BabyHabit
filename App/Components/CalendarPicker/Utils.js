/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

export const Utils = {
  START_DATE: 'START_DATE',
  END_DATE: 'END_DATE',
  WEEKDAYS: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  WEEKDAYS_MON: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  MONTHS: [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月',
    '8月', '9月', '10月', '11月', '12月'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
};
