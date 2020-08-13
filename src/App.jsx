import React from 'react';
//import Stopwatch from './components/Stopwatch';
import Calendar from './components/Calendar';

function App() {
  //  return <Stopwatch />;
  return (
    <>
      <Calendar currentDate={new Date()} />
      {/* <Calendar currentDate={new Date(2020, 5 - 1, 11)} /> */}
    </>
  )
}

export default App;
