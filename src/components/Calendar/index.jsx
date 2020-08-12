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
  let j=1;
  for (let i=firstWeekDay+7;i<firstWeekDay+7+dayInMonth[currentDateMonth];i++) cellValue[i]=j++;  
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

// constructor(props) {
//   super(props);
//   this.state = {
// //      currentDate: new Date()
//   }
// }  

class CalendarSheetElement extends React.Component {
  render() {
    if (!this.props.sheet)
      return (
        <div className={styles.calendarDay} style={{color: 'white'}}>{currentDateDay}</div>
      )
    else {
        const elements = [];
    for (let i=0; i<49; ++i) {
//      elements.push(<a className={styles.calendarTableCell}>{cellValue[i]}</a>);
      elements.push(<a key={i} className={styles.calendarTableCell} style={{borderColor: currentDateDay!==cellValue[i]?'white':'red', color: (currentDateDay!==cellValue[i] && i>6)?'lightseagreen':'red'}}>{cellValue[i]}</a>);
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
    // if (!this.props.sheet) {
    //   let styleH3={fontWeight:'normal', color:'white'};
    //   let styleArticle={backgroundColor: '#30e9ca'};
    // } else {
    //   let styleH3={color:'lightseagreen'};
    // }
    // return (
    //   <article className={styles.calendarSheet} style={styleArticle}>
    //     <h3 style={styleH3}>{this.props.text}</h3>
    //     <CalendarSheetElement sheet={this.props.sheet}/>
    //   </article>
    // )
    return (
      <article className={styles.calendarSheet} style={this.props.styleArticle}>
        <h3 style={this.props.styleH3}>{this.props.text}</h3>
        <CalendarSheetElement sheet={this.props.sheet}/>
      </article>
    )
  }
}

class Calendar extends React.Component {
  render() {
    return (
      <article className={styles.calendarContainer}>
        {/* <CalendarSheet text={currentDateWeekDay} sheet={0}/>
        <CalendarSheet text={currentDateMonthYear} sheet={1}/> */}
        <CalendarSheet text={currentDateWeekDay} sheet={0} styleH3={{fontWeight:'normal', color:'white'}} styleArticle={{backgroundColor: '#30e9ca'}}/>
        <CalendarSheet text={currentDateMonthYear} sheet={1} styleH3={{color:'lightseagreen'}} />
      </article>
    )
  }
}

export default Calendar;