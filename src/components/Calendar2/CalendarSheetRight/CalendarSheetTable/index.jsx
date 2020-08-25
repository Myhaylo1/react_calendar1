import React from 'react';
import styles from './CalendarSheetTable.module.scss';
import * as dateFns from 'date-fns';

/**
 * cellValue {Array}
 * start {Number}
 * end {Number}
 * value {*}
 */
function fillCellConst(cellValue, start, end, value) {
  if (start < end) {
    cellValue.push(value);
    fillCellConst(cellValue, ++start, end, value);
  }
}

/**
 * cellValue {Array}
 * start {Number}
 * end {Number}
 * value {Number}
 */
function fillCellCounter(cellValue, start, end, value) {
  if (start < end) {
    cellValue[start] = value++;
    fillCellCounter(cellValue, ++start, end, value);
  }
}

/**
 * elements {Array}
 * cellValue {Array}
 * start {Number}
 * end {Number}
 * MonthDay {Number}
 */
function fillTable(elements, cellValue, start, end, MonthDay) {
  if (start < end) {
    elements.push(React.createElement("div", {
      key: start,
      className: styles.calendarTableCell,
      style: {
        borderColor: MonthDay !== cellValue[start] ? 'white' : 'red',
        color: MonthDay !== cellValue[start] && start > 6 ? 'lightseagreen' : 'red'
      }
    }, cellValue[start]));
    fillTable(elements, cellValue, ++start, end, MonthDay);
  }
}

class CalendarSheetTable extends React.Component {
  render() {
    let { currentDate } = this.props;
    let cellValue = [];
    let j = 1;
    cellValue.push('S', 'M', 'T', 'W', 'T', 'F', 'S');
    fillCellConst(cellValue, 7, 49, '');
    let MonthDay = dateFns.getDate(currentDate);
    let WeekDay = dateFns.getDay(currentDate);
    let firstWeekDay = MonthDay % 7;
    if (WeekDay < firstWeekDay - 1) firstWeekDay = WeekDay + 8 - firstWeekDay;
    else firstWeekDay = Math.abs(firstWeekDay - WeekDay - 1);
    firstWeekDay += 7;
    fillCellCounter(cellValue, firstWeekDay, firstWeekDay + dateFns.getDaysInMonth(currentDate), j);
    let elements = [];
    fillTable(elements, cellValue, 0, 49, MonthDay);
    return (
      <div className={styles.calendarTableContainer} >
        {elements}
      </div>
    )
  }
}

export default CalendarSheetTable;