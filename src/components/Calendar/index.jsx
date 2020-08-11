import React from 'react';
import styles from './Calendar.module.scss';
//import * as dateFns from 'date-fns';

let currentDate=new Date();
let currentDateWeekDay=currentDate.toLocaleString('en-US',{weekday:'long'})
let currentDateDay=currentDate.toLocaleString('en-US',{day: 'numeric'})
let currentDateMonth=currentDate.toLocaleString('en-US',{month: 'long'})
let currentDateYear=currentDate.toLocaleString('en-US',{year: 'numeric'})
let currentDateMonthYear=currentDate.toLocaleString('en-US',{month: 'long', year: 'numeric'})
let cellValue=[];

function fillCellValue()
{
  cellValue=[];
  cellValue.push('S','M','T','W','T','F','S');
  for (let i=7;i<49;i++) cellValue.push(i);
  console.log(cellValue);
  return cellValue;
}

cellValue=fillCellValue();

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

class CalendarSheetElement extends React.Component {
  render() {
    const elements = [];
    for (let i=0; i<49; ++i) {
      elements.push(<a className={styles.calendarTableCell}>{cellValue[i]}</a>);
    }
    if (!this.props.sheet)
      return (
        <div className={styles.calendarDay}>{currentDateDay}</div>
      )
    else 
      return (
      // <a>!!!!</a>
      <div className={styles.calendarTable}>
        {elements}
      </div>
      )
  }
}

class CalendarSheet extends React.Component {
  render() {
    return (
      <article className={styles.calendarSheet}>
        <h3 style={this.props.style}>{this.props.text}</h3>
        <CalendarSheetElement sheet={this.props.sheet}/>
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
        <CalendarSheet className={styles.calendarSheet} text={currentDateWeekDay} sheet={0} style={{fontWeight:'normal'}}/>
        <CalendarSheet className={styles.calendarSheet} text={currentDateMonthYear} sheet={1}/>
      </article>
    )
  }
}

export default Calendar;