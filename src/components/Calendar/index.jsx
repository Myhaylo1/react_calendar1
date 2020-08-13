import React from 'react';
import styles from './Calendar.module.scss';
//import * as dateFns from 'date-fns';


class CalendarSheetElement extends React.Component {
  render() {
    let { currentDateObj, sheet } = this.props;
    let { Day, cellValue } = currentDateObj;
    if (!sheet)
      return (
        <div className={styles.calendarDay} style={{ color: 'white' }}>{Day}</div>
      )
    else {
      const elements = [];
      for (let i = 0; i < 49; ++i) {
        elements.push(<div key={i} className={styles.calendarTableCell} style={{
          borderColor: Day !== cellValue[i] ? 'white' : 'red',
          color: (Day !== cellValue[i] && i > 6) ? 'lightseagreen' : 'red'
        }}>{cellValue[i]}</div>);
      }
      return (
        <div className={styles.calendarTable}>
          {elements}
        </div>
      )
    }
  }
}

class CalendarSheet extends React.Component {
  render() {
    let styleH3;
    let styleArticle;
    let text;
    if (!this.props.sheet) {
      styleH3 = {
        fontWeight: 'normal',
        color: 'white'
      };
      styleArticle = { backgroundColor: '#30e9ca' };
      text = this.props.currentDateObj.WeekDay;
    } else {
      styleH3 = { color: 'lightseagreen' };
      text = this.props.currentDateObj.MonthYear;
    }
    return (
      <article className={styles.calendarSheet} style={styleArticle}>
        <h3 style={styleH3}>{text}</h3>
        <CalendarSheetElement currentDateObj={this.props.currentDateObj} sheet={this.props.sheet} />
      </article>
    )
  }
}

class Calendar extends React.Component {
  render() {
    let { currentDate } = this.props;
    let currentDateObj = {
      WeekDay: currentDate.toLocaleString('en-US', { weekday: 'long' }),
      DayOfWeek: currentDate.getDay(),
      Day: Number(currentDate.toLocaleString('en-US', { day: 'numeric' })),
      Month: currentDate.getMonth(),
      Year: Number(currentDate.toLocaleString('en-US', { year: 'numeric' })),
      MonthYear: currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
      cellValue: []
    }

    let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    dayInMonth[1] = 28;
    if (!(currentDateObj.Year % 4)) dayInMonth[1]++;
    currentDateObj.cellValue.push('S', 'M', 'T', 'W', 'T', 'F', 'S');
    for (let i = 7; i < 49; i++) currentDateObj.cellValue.push('');
    let firstWeekDay = currentDateObj.Day % 7;
    if (currentDateObj.DayOfWeek < firstWeekDay - 1) firstWeekDay = currentDateObj.DayOfWeek + 8 - firstWeekDay;
    else firstWeekDay = Math.abs(firstWeekDay - currentDateObj.DayOfWeek - 1);
    let j = 1;
    for (let i = firstWeekDay + 7; i < firstWeekDay + 7 + dayInMonth[currentDateObj.Month]; i++) currentDateObj.cellValue[i] = j++;

    return (
      <article className={styles.calendarContainer}>
        <CalendarSheet currentDateObj={currentDateObj} sheet={0} />
        <CalendarSheet currentDateObj={currentDateObj} sheet={1} />
      </article>
    )
  }
}

export default Calendar;