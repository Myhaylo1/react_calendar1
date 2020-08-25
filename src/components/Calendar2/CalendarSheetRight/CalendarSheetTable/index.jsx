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
 * value {Number}
 */
function fillTable(elements, cellValue, start, end, value) {
  if (start < end) {
    elements.push(React.createElement('div', { key: { start }, className: 'calendarTableCell', style: { borderColor: value !== cellValue[start] ? 'white' : 'red', color: (value !== cellValue[start] && start > 6) ? 'lightseagreen' : 'red' } }, cellValue[start]));
    fillTable(elements, cellValue, ++start, end, value);
  }
}

class CalendarSheetTable extends React.Component {
  render() {
    let { currentDate } = this.props
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

    // for (let i = 0; i < 49; ++i) {
    //   elements.push(<div key={i} className={styles.calendarTableCell} style={{
    //     borderColor: MonthDay !== cellValue[i] ? 'white' : 'red',
    //     color: (MonthDay !== cellValue[i] && i > 6) ? 'lightseagreen' : 'red'
    //   }}>{cellValue[i]}</div>);
    // }

    for (let i = 0; i < 49; ++i) {
      elements.push(React.createElement('div', { className: 'calendarTableCell' }, cellValue[i]));
    }

    // fillTable(elements, cellValue, 0, 49, MonthDay);
    return (
      <div className={styles.calendarTableContainer} >
        {elements}
        {/* React.createElement('div', className: 'calendarTableCell', cellValue[0]); */}
      </div>
    )
  }
}

export default CalendarSheetTable;