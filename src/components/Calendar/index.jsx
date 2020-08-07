import React from 'react';
import styles from './Calendar.module.scss';
//import * as dateFns from 'date-fns';

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
//        <Hello className={styles.calendarSheet} toWhat="мир" />
      </article>
    )
  }
}

export default Calendar;