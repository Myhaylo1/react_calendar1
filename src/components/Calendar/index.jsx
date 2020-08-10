import React from 'react';
import styles from './Calendar.module.scss';
//import * as dateFns from 'date-fns';

let currentDate=new Date();
let currentDateWeekDay=currentDate.toLocaleString('en-US',{weekday:'long'})
let currentDateDay=currentDate.toLocaleString('en-US',{day: 'numeric'})
let currentDateMonth=currentDate.toLocaleString('en-US',{month: 'long'})
let currentDateYear=currentDate.toLocaleString('en-US',{year: 'numeric'})
let currentDateMonthYear=currentDate.toLocaleString('en-US',{month: 'long', year: 'numeric'})

// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
//   render() {
//     return (
//       <article className={styles.calendarContainer}>
//         <article className={styles.calendarSheet}>
//           <h3>ПрЮвет ВОЛКУ!!!</h3>
//         </article>
//         <article className={styles.calendarSheet}>
//           <h3>ПрЮвет ЗАЙЦУ!!!</h3>
//         </article>
//       </article>
//     )
//   }
// }

// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
//   render() {
//     return (
//       React.createElement("article", {className: styles.calendarContainer},
//         React.createElement("article", {className: styles.calendarSheet},
//           React.createElement("h3", null, 'ПрЮвет ВОЛКУ!!!')
//         ),
//         React.createElement("article", {className: styles.calendarSheet},
//           React.createElement("h3", null, 'ПрЮвет ВОЛКУ!!!')
//         )
//       )
//     )
//   }
// }

class Hello extends React.Component {
  render() {
    return <div className={this.props.className}>Привет, {this.props.toWhat}!</div>;
  }
}

class CalendarSheet extends React.Component {
  render() {
    // return <div className={this.props.className}>Привет, {this.props.toWhat}!</div>;
    return (
      <article className={styles.calendarSheet}>
        <h3 style={this.props.style}>{this.props.text}</h3>
      </article>

    )
  }
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
//      currentDate: new Date()
    }
  }
  
  render() {
    return (
      <article className={styles.calendarContainer}>
        {/* <Hello className={styles.calendarSheet} toWhat="мир" /> */}
        {/* <CalendarSheet className={styles.calendarSheet} text={currentDateWeekDay} style={{font-weight: 'normal'}} /> */}
        <CalendarSheet className={styles.calendarSheet} text={currentDateWeekDay} />
        <CalendarSheet className={styles.calendarSheet} text={currentDateMonthYear}/>
      </article>
    )
  }
}

export default Calendar;