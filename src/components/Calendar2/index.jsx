import React from 'react';
import CalendarSheetLeft from './../Calendar2/CalendarSheetLeft';
import CalendarSheetRight from './../Calendar2/CalendarSheetRight';
import styles from './Calendar2.module.scss';

class Calendar2 extends React.Component {
  render() {
    let { currentDate } = this.props;
    return (
      <article className={styles.calendarContainer}>
        <CalendarSheetLeft currentDate={currentDate} />
        <CalendarSheetRight currentDate={currentDate} />
      </article>
    )
  }
}

export default Calendar2;