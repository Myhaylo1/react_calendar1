import React from 'react';
import styles from './Calendar.module.scss';
//import * as dateFns from 'date-fns';

let currentDate=new Date();
//let currentDate=new Date(2020,9-1,11);
let currentDateWeekDay=currentDate.toLocaleString('en-US',{weekday:'long'})
let currentDateDayOfWeek=currentDate.getDay();
let currentDateDay=Number(currentDate.toLocaleString('en-US',{day: 'numeric'}));
// let currentDateMonth=currentDate.toLocaleString('en-US',{month: 'long'});
let currentDateMonth=currentDate.getMonth();
let currentDateYear=Number(currentDate.toLocaleString('en-US',{year: 'numeric'}));
let currentDateMonthYear=currentDate.toLocaleString('en-US',{month: 'long', year: 'numeric'})
let dayInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
let cellValue=[];

function fillCellValue()
{
  dayInMonth[1]=28;
  if (!(currentDateYear % 4)) dayInMonth[1]++;
  cellValue=[];
  cellValue.push('S','M','T','W','T','F','S');
  for (let i=7;i<49;i++) cellValue.push('');
  let firstWeekDay=currentDateDay % 7;
  if (currentDateDayOfWeek<firstWeekDay-1) firstWeekDay=currentDateDayOfWeek+8-firstWeekDay; else firstWeekDay=Math.abs(firstWeekDay-currentDateDayOfWeek-1);
//  for (let i=7;i<7+firstWeekDay;i++) cellValue[i]='';
  let j=1;
  for (let i=firstWeekDay+7;i<firstWeekDay+7+dayInMonth[currentDateMonth];i++) cellValue[i]=j++;  
  console.log(firstWeekDay,dayInMonth[currentDateMonth],currentDateDayOfWeek,' ',currentDateWeekDay,cellValue);
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

class CalendarSheetElement extends React.Component {
  render() {
    const elements = [];
    for (let i=0; i<49; ++i) {
//      elements.push(<a className={styles.calendarTableCell}>{cellValue[i]}</a>);
      elements.push(<a key={i} className={styles.calendarTableCell} style={{borderColor: currentDateDay!==cellValue[i]?'white':'red'}}>{cellValue[i]}</a>);
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
    console.log(this.props);
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