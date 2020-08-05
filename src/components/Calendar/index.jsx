import React from 'react';
import styles from './Calendar.module.scss';
import * as dateFns from 'date-fns';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    }
  }

  render() {
    let {currentDate} = this.state;
    return (
      <article>
        <div className={styles.container}>
          // {currentDate.toLocaleDateString()}
          {dateFns.format(currentDate, 'Do = ww')}
        </div>
        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                years: 1
              })
            })
          }}
        >Add year
        </button>
        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                month: 1
              })
            })
          }}
        >Add month
        </button>
        <button
          onClick={() => {
            this.setState({
              currentDate: dateFns.add(currentDate, {
                date: 1
              })
            })
          }}
        >Add date
        </button>
      </article>
    )
  }
}

export default Calendar;