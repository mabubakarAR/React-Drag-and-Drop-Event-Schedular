import React from 'react';
import ReactDOM from 'react-dom';
import Dnd from './Components/Dnd';
import BigCalendar from 'react-big-calendar'
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

ReactDOM.render(<Dnd />, document.getElementById("root"));