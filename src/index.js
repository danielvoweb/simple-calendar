import simpleCalendar from './simple-calendar';

const el = document.querySelector('table.calendar');
const today = new Date();

simpleCalendar.render(el, today);
