import React from 'react';
import styles from './CalendarSheetLeft.module.scss';
import * as dateFns from 'date-fns';

class CalendarSheetLeft extends React.Component {
	render() {
		let { currentDate } = this.props
		return (
			<article className={styles.calendarSheetLeft}>
				<h3 className={styles.calendarH3Left}>{dateFns.format(currentDate, 'iiii')}</h3>
				<div className={styles.calendarDay}>{dateFns.getDate(currentDate)}</div>
			</article>
		)
	}
}

export default CalendarSheetLeft;