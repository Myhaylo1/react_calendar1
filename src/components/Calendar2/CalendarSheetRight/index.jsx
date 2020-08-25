import React from 'react';
import styles from './CalendarSheetRight.module.scss';
import CalendarSheetTable from './CalendarSheetTable';
import * as dateFns from 'date-fns';

class CalendarSheetRight extends React.Component {
	render() {
		let { currentDate } = this.props
		return (
			<article className={styles.calendarSheetRight}>
				<h3 className={styles.calendarH3Right}>{dateFns.format(currentDate, 'LLLL yyyy')}</h3>
				<CalendarSheetTable currentDate={currentDate} />
			</article>
		)
	}
}

export default CalendarSheetRight;