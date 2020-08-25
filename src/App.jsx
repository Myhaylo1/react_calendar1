import React from 'react';
import Calendar2 from './components/Calendar2';

function App() {
  return (
    <>
      <Calendar2 currentDate={new Date()} />
      <Calendar2 currentDate={new Date(2020, 5 - 1, 11)} />
    </>
  )
}

export default App;
